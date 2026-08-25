import React, { useState } from 'react';
import { ArrowUp, Coffee } from 'lucide-react';
import type { ProfileData } from '../types';
import type { Translations } from '../data/translations';
import { soundManager } from '../utils/soundEffects';

interface FooterProps {
  profile: ProfileData;
  onToast: (msg: string) => void;
  t: Translations['footer'];
}

export const Footer: React.FC<FooterProps> = ({ profile, onToast, t }) => {
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
      onToast(t.coffeeToast1);
    } else if (newCount === 10) {
      onToast(t.coffeeToast2);
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
          title={t.backToTop}
        >
          <ArrowUp className="w-3.5 h-3.5" />
          <span>{t.backToTop}</span>
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
            {t.coffeeCountText(coffeeCount)}
          </span>
        </div>

        {/* Créditos e Assinatura */}
        <div className="space-y-1.5 font-mono text-xs" style={{ color: profile.theme.pencil }}>
          <p className="m-0">
            {t.credits(profile.fullName)}
          </p>
          <p className="m-0 text-[0.7rem] opacity-75">
            {t.subcredits}
          </p>
        </div>
      </div>
    </footer>
  );
};