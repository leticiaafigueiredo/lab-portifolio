import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, Cpu, BarChart3, Layers } from 'lucide-react';
import type { Project, ProfileTheme } from '../types';
import type { Translations } from '../data/translations';
import { GithubIcon } from './Icons';
import { soundManager } from '../utils/soundEffects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  theme: ProfileTheme;
  t: Translations['projectModal'];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, theme, t }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop escuro suave com blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            soundManager.playPaperRustle();
            onClose();
          }}
          className="fixed inset-0 bg-black/45 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Card Estilo Folha de Caderno */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20, rotate: -1 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20, rotate: 1 }}
          transition={{ type: 'spring', damping: 25, stiffness: 320 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto my-auto z-10 sketchy p-6 sm:p-8"
          style={{
            backgroundColor: theme.paper,
            color: theme.ink,
            border: `2.5px solid ${theme.ink}`,
            boxShadow: '8px 12px 0px rgba(0,0,0,0.22)',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Fita adesiva decorativa */}
          <div
            className="absolute -top-3 left-12 w-28 h-6 opacity-75 -rotate-2 hidden sm:block shadow-xs"
            style={{ backgroundColor: theme.yellow, border: '1px dashed rgba(0,0,0,0.15)' }}
          />

          {/* Botão de Fechar */}
          <button
            onClick={() => {
              soundManager.playClick();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="w-6 h-6" style={{ color: theme.ink }} />
          </button>

          {/* Header do Projeto */}
          <div className="mb-5 pr-8">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span
                className="font-mono text-[0.72rem] uppercase tracking-wider px-2.5 py-0.5 rounded-sm font-bold"
                style={{ backgroundColor: theme.yellow, color: '#221F1B' }}
              >
                {project.category}
              </span>
              {project.featured && (
                <span
                  className="font-mono text-[0.7rem] uppercase tracking-wider px-2 py-0.5 rounded-sm"
                  style={{ border: `1px dashed ${theme.red}`, color: theme.red }}
                >
                  {t.featured}
                </span>
              )}
            </div>

            <h2 className="font-caveat text-3xl sm:text-4xl font-bold leading-tight m-0">
              {project.title}
            </h2>
            <p className="font-architects text-base sm:text-lg mt-1" style={{ color: theme.blue }}>
              {project.subtitle}
            </p>
          </div>

          {/* Descrição Completa */}
          <div
            className="p-4 mb-6 rounded-sm text-sm sm:text-base leading-relaxed font-roboto"
            style={{
              backgroundColor: theme.paper2,
              borderLeft: `4px solid ${theme.accent}`,
              color: theme.ink,
            }}
          >
            {project.fullDescription || project.description}
          </div>

          {/* Métricas / Impacto */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mb-6">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2" style={{ color: theme.pencil }}>
                <BarChart3 className="w-4 h-4" /> {t.impactTitle}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-3 border text-center rounded-sm"
                    style={{
                      borderColor: theme.line,
                      backgroundColor: theme.paper2,
                    }}
                  >
                    <div className="font-mono font-bold text-xl" style={{ color: theme.red }}>
                      {metric.value}
                    </div>
                    <div className="font-mono text-[0.72rem]" style={{ color: theme.pencil }}>
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Destaques Técnicos */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2" style={{ color: theme.pencil }}>
                <CheckCircle className="w-4 h-4" /> {t.highlightsTitle}
              </h3>
              <ul className="space-y-2 list-none p-0 m-0">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-roboto text-sm" style={{ color: theme.ink }}>
                    <span className="font-bold text-base leading-none" style={{ color: theme.red }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Arquitetura */}
          {project.architecture && (
            <div className="mb-6">
              <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-2 flex items-center gap-2" style={{ color: theme.pencil }}>
                <Cpu className="w-4 h-4" /> {t.architectureTitle}
              </h3>
              <div
                className="p-3 font-mono text-xs leading-relaxed border rounded-sm"
                style={{
                  borderColor: theme.line,
                  backgroundColor: 'rgba(0,0,0,0.03)',
                  color: theme.ink,
                }}
              >
                {project.architecture}
              </div>
            </div>
          )}

          {/* Tecnologias Utilizadas */}
          <div className="mb-7">
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2" style={{ color: theme.pencil }}>
              <Layers className="w-4 h-4" /> {t.techTitle}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs px-2.5 py-1 rounded-sm border"
                  style={{
                    borderColor: theme.ink,
                    backgroundColor: theme.paper2,
                    color: theme.ink,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Rodapé do Modal com Ações */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-dashed" style={{ borderColor: theme.line }}>
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2.5 cursor-pointer no-underline rounded-sm transition-transform active:scale-95"
                  style={{
                    backgroundColor: theme.ink,
                    color: theme.paper,
                  }}
                  onClick={() => soundManager.playClick()}
                >
                  <ExternalLink className="w-4 h-4" /> {t.viewLive}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs font-bold px-4 py-2.5 cursor-pointer no-underline rounded-sm border-2 transition-transform active:scale-95"
                  style={{
                    borderColor: theme.ink,
                    color: theme.ink,
                    backgroundColor: 'transparent',
                  }}
                  onClick={() => soundManager.playClick()}
                >
                  <GithubIcon size={16} /> {t.viewCode}
                </a>
              )}
            </div>

            <button
              onClick={() => {
                soundManager.playClick();
                onClose();
              }}
              className="font-mono text-xs cursor-pointer px-3 py-2 opacity-75 hover:opacity-100 underline"
              style={{ color: theme.pencil }}
            >
              {t.closeSketch}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
