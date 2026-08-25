import React, { useState } from 'react';
import { ArrowUp, Coffee } from 'lucide-react';
import type { ProfileData } from '../types';
import { soundManager } from '../utils/soundEffects';

interface FooterProps {
  profile: ProfileData;
  onToast: (msg: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ profile, onToast }) => {
  const [coffeeCount, setCoffeeCount] = useState<number>(4);

  const scrollToTop = () => {
    soundManager.playPaperRustle();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCoffeeClick = () => {
    soundManager.playPop();
    const newCount = coffeeCount + 1;
    setCoffeeCount(newCount);
    if (newCount === 5) {
      onToast('Mais um café fresquinho adicionado! ☕');
    } else if (newCount === 10) {
      onToast('Nível de cafeína no limite máximo de produtividade! 🚀⚡');
    }
  };

  return (
    <footer
      className="mt-20 pt-12 pb-16 border-t-2 border-dashed relative text-center"
      style={{ borderColor: profile.theme.line }}
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-6">
        {/* Botão de Voltar ao Topo */}
        <button
          onClick={scrollToTop}
          className="sketchy px-4 py-2 font-mono text-xs font-bold cursor-pointer transition-transform hover:-translate-y-1 active:scale-95 inline-flex items-center gap-2"
          style={{
            backgroundColor: profile.theme.paper2,
            borderColor: profile.theme.ink,
            color: profile.theme.ink,
            border: `2px solid ${profile.theme.ink}`,
          }}
          title="Voltar ao início da página"
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>Voltar ao topo</span>
        </button>

        {/* Easter Egg do Café */}
        <div className="inline-flex items-center gap-2 p-2 px-4 rounded-full border cursor-pointer select-none transition-transform hover:scale-105"
          onClick={handleCoffeeClick}
          style={{
            borderColor: profile.theme.line,
            backgroundColor: profile.theme.paper2,
          }}
          title="Clique para adicionar mais café!"
        >
          <Coffee className="w-4 h-4" style={{ color: profile.theme.red }} />
          <span className="font-mono text-xs" style={{ color: profile.theme.ink }}>
            Cafés consumidos neste projeto: <strong>{coffeeCount}</strong> ☕ (clique p/ abastecer)
          </span>
        </div>

        {/* Créditos e Assinatura */}
        <div className="space-y-1.5 font-mono text-xs" style={{ color: profile.theme.pencil }}>
          <p className="m-0">
            Feito à mão (com código limpo & muito café) © 2026 // <strong>{profile.fullName}</strong>
          </p>
          <p className="m-0 text-[0.7rem] opacity-75">
            Portfólio Compartilhado: <strong>Murilo Freitas</strong> (Full-Stack) & <strong>Letícia Figueiredo</strong> (Data Engineering)
          </p>
        </div>
      </div>
    </footer>
  );
};