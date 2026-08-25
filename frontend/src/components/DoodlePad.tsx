import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Trash2, Download, RotateCcw, Sparkles, PenTool, Highlighter, Eraser } from 'lucide-react';
import type { ProfileData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface DoodlePadProps {
  profile: ProfileData;
  onToast: (msg: string) => void;
}

interface Point {
  x: number;
  y: number;
}

interface Stroke {
  points: Point[];
  color: string;
  size: number;
  isHighlighter?: boolean;
}

export const DoodlePad: React.FC<DoodlePadProps> = ({ profile, onToast }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentColor, setCurrentColor] = useState<string>('#221F1B');
  const currentSize = 3;
  const [activeTool, setActiveTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Stroke | null>(null);

  const colorPresets = [
    { label: 'Nanquim', value: '#221F1B' },
    { label: 'Vermelho', value: profile.theme.red },
    { label: 'Azul', value: profile.theme.blue },
    { label: 'Amarelo', value: '#F4C23D' },
    { label: 'Grafite', value: '#736A5C' },
  ];

  // Redesenhar canvas sempre que strokes mudarem
  const redraw = useCallback((allStrokes: Stroke[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Limpar fundo
    ctx.fillStyle = profile.theme.paper;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Linha de margem do caderno (estilo folha pautada)
    ctx.strokeStyle = profile.theme.line;
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(50, 0);
    ctx.lineTo(50, canvas.height);
    ctx.stroke();
    ctx.setLineDash([]);

    // Linhas horizontais sutis do caderno
    ctx.strokeStyle = 'rgba(0,0,0,0.04)';
    ctx.lineWidth = 1;
    for (let y = 30; y < canvas.height; y += 24) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
    }

    // Renderizar traços
    allStrokes.forEach((stroke) => {
      if (stroke.points.length < 2) return;
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      if (stroke.isHighlighter) {
        ctx.globalAlpha = 0.45;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size * 3.5;
      } else {
        ctx.globalAlpha = 1;
        ctx.strokeStyle = stroke.color;
        ctx.lineWidth = stroke.size;
      }

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
    });
  }, [profile.theme.paper, profile.theme.line]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width || 700;
      canvas.height = 340;
      redraw(strokes);
    }
  }, [redraw, strokes]);

  const getCanvasCoords = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>): Point | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const pt = getCanvasCoords(e);
    if (!pt) return;
    setIsDrawing(true);
    soundManager.playPencilScratch();

    const newStroke: Stroke = {
      points: [pt],
      color: activeTool === 'eraser' ? profile.theme.paper : currentColor,
      size: activeTool === 'eraser' ? currentSize * 5 : currentSize,
      isHighlighter: activeTool === 'highlighter',
    };
    setCurrentStroke(newStroke);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !currentStroke) return;
    const pt = getCanvasCoords(e);
    if (!pt) return;

    const updatedStroke = {
      ...currentStroke,
      points: [...currentStroke.points, pt],
    };
    setCurrentStroke(updatedStroke);
    redraw([...strokes, updatedStroke]);
  };

  const stopDrawing = () => {
    if (isDrawing && currentStroke) {
      setStrokes((prev) => [...prev, currentStroke]);
      setCurrentStroke(null);
      setIsDrawing(false);
    }
  };

  const handleUndo = () => {
    soundManager.playClick();
    setStrokes((prev) => {
      const updated = prev.slice(0, -1);
      redraw(updated);
      return updated;
    });
  };

  const handleClear = () => {
    soundManager.playPaperRustle();
    setStrokes([]);
    redraw([]);
    onToast('Caderno de rabiscos limpo com sucesso! 📄');
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    soundManager.playPop();

    // Adicionar carimbo e assinatura antes de baixar
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    const ctx = tempCanvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(canvas, 0, 0);

    // Carimbo no canto inferior direito
    ctx.font = '12px monospace';
    ctx.fillStyle = profile.theme.pencil;
    ctx.fillText(`Rabiscos @ ${profile.fullName} // 2026`, 65, canvas.height - 15);

    const dataUrl = tempCanvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `rabisco-${profile.id}-${Date.now()}.png`;
    link.href = dataUrl;
    link.click();
    onToast('Rascunho baixado com sucesso! 🎨');
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20"
      id="rabiscos"
      style={{ borderTop: `2px dashed ${profile.theme.line}` }}
    >
      {/* Cabeçalho da Seção */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm font-bold" style={{ color: profile.theme.pencil }}>
            04 //
          </span>
          <h2 className="font-caveat font-bold m-0 leading-tight text-4xl sm:text-5xl" style={{ color: profile.theme.ink }}>
            bloco de rascunhos interativo
          </h2>
        </div>

        <span className="font-mono text-xs opacity-75 flex items-center gap-1.5" style={{ color: profile.theme.pencil }}>
          <Sparkles className="w-3.5 h-3.5" style={{ color: profile.theme.red }} />
          Deixe um recado, autógrafo ou rabisco livre!
        </span>
      </div>

      <div
        className="sketchy p-5 sm:p-7 relative"
        style={{
          backgroundColor: profile.theme.paper2,
          border: `2px solid ${profile.theme.ink}`,
          boxShadow: '6px 8px 0px rgba(0,0,0,0.1)',
        }}
      >
        {/* Fita adesiva */}
        <div
          className="absolute -top-3 left-10 w-28 h-5 opacity-75 rotate-[-2deg]"
          style={{ backgroundColor: profile.theme.yellow, border: '1px dashed rgba(0,0,0,0.2)' }}
        />

        {/* Barra de Ferramentas de Desenho */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-dashed" style={{ borderColor: profile.theme.line }}>
          {/* Seletor de Ferramenta */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTool('pen');
              }}
              className={`p-2 rounded-xs border font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                activeTool === 'pen' ? 'font-bold shadow-xs' : 'opacity-70'
              }`}
              style={{
                backgroundColor: activeTool === 'pen' ? profile.theme.ink : profile.theme.paper,
                color: activeTool === 'pen' ? profile.theme.paper : profile.theme.ink,
                borderColor: profile.theme.ink,
              }}
              title="Caneta Nanquim"
            >
              <PenTool className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Caneta</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTool('highlighter');
              }}
              className={`p-2 rounded-xs border font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                activeTool === 'highlighter' ? 'font-bold shadow-xs' : 'opacity-70'
              }`}
              style={{
                backgroundColor: activeTool === 'highlighter' ? profile.theme.yellow : profile.theme.paper,
                color: '#221F1B',
                borderColor: profile.theme.ink,
              }}
              title="Marca-Texto Amarelo"
            >
              <Highlighter className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Marca-Texto</span>
            </button>

            <button
              onClick={() => {
                soundManager.playClick();
                setActiveTool('eraser');
              }}
              className={`p-2 rounded-xs border font-mono text-xs flex items-center gap-1.5 cursor-pointer transition-all ${
                activeTool === 'eraser' ? 'font-bold shadow-xs' : 'opacity-70'
              }`}
              style={{
                backgroundColor: activeTool === 'eraser' ? profile.theme.pencil : profile.theme.paper,
                color: activeTool === 'eraser' ? profile.theme.paper : profile.theme.ink,
                borderColor: profile.theme.ink,
              }}
              title="Borracha"
            >
              <Eraser className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Borracha</span>
            </button>
          </div>

          {/* Paleta de Cores */}
          <div className="flex items-center gap-2">
            {colorPresets.map((c) => (
              <button
                key={c.value}
                onClick={() => {
                  soundManager.playClick();
                  setCurrentColor(c.value);
                  if (activeTool === 'eraser') setActiveTool('pen');
                }}
                className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 cursor-pointer ${
                  currentColor === c.value && activeTool !== 'eraser' ? 'scale-125 ring-2 ring-black/30' : ''
                }`}
                style={{
                  backgroundColor: c.value,
                  borderColor: profile.theme.ink,
                }}
                title={c.label}
              />
            ))}
          </div>

          {/* Ações: Desfazer, Limpar, Baixar */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleUndo}
              disabled={strokes.length === 0}
              className="p-2 rounded-xs border font-mono text-xs flex items-center gap-1 cursor-pointer disabled:opacity-40"
              style={{
                backgroundColor: profile.theme.paper,
                borderColor: profile.theme.ink,
                color: profile.theme.ink,
              }}
              title="Desfazer último traço"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleClear}
              disabled={strokes.length === 0}
              className="p-2 rounded-xs border font-mono text-xs flex items-center gap-1 cursor-pointer disabled:opacity-40"
              style={{
                backgroundColor: profile.theme.paper,
                borderColor: profile.theme.ink,
                color: profile.theme.ink,
              }}
              title="Limpar tudo"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={handleDownload}
              className="sketchy px-3 py-1.5 font-mono text-xs font-bold flex items-center gap-1.5 cursor-pointer active:scale-95"
              style={{
                backgroundColor: profile.theme.ink,
                color: profile.theme.paper,
                border: `1.5px solid ${profile.theme.ink}`,
              }}
              title="Baixar imagem do rabisco"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Salvar Desenho</span>
            </button>
          </div>
        </div>

        {/* Área do Canvas de Desenho */}
        <div
          className="relative w-full rounded-xs overflow-hidden cursor-crosshair border-2"
          style={{
            borderColor: profile.theme.ink,
            backgroundColor: profile.theme.paper,
          }}
        >
          <canvas
            ref={canvasRef}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={startDrawing}
            onTouchMove={draw}
            onTouchEnd={stopDrawing}
            className="w-full block touch-none"
            style={{ height: '340px' }}
          />

          {/* Dica inicial se estiver vazio */}
          {strokes.length === 0 && !isDrawing && (
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center font-architects text-lg opacity-35" style={{ color: profile.theme.pencil }}>
              ✏️ Desenhe algo aqui com o mouse ou o dedo...
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
