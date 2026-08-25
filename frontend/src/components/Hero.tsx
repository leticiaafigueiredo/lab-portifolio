import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Download, Sparkles } from 'lucide-react';
import type { ProfileData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface HeroProps {
  profile: ProfileData;
  onToggleUser: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onToggleUser }) => {
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal(heroRef);

  return (
    <section
      ref={heroRef}
      className="py-10 sm:py-16 pb-12 sm:pb-20 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-10 sm:gap-14 items-center"
    >
      {/* Coluna Esquerda: Texto Principal */}
      <div>
        {/* Tagline de Topo */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <span
            className="sketchy inline-block px-3.5 py-1.5 font-mono text-[0.72rem] tracking-wider uppercase font-bold"
            style={{
              backgroundColor: profile.theme.paper2,
              color: profile.theme.pencil,
              border: `1.5px solid ${profile.theme.ink}`,
            }}
          >
            {profile.tag}
          </span>
          <span
            className="font-mono text-[0.72rem] px-2.5 py-1 rounded-full flex items-center gap-1.5"
            style={{
              backgroundColor: 'rgba(34, 197, 94, 0.15)',
              color: '#15803d',
              border: '1px solid rgba(34, 197, 94, 0.35)',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
            <span>{profile.status}</span>
          </span>
        </div>

        {/* Título Principal com Circulo Desenhado */}
        <motion.h1
          key={profile.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="font-caveat font-bold leading-[1.05] text-[3.6rem] sm:text-[4.8rem] md:text-[5.4rem] m-0 mb-2"
          style={{ color: profile.theme.ink }}
        >
          Oi, eu sou<br />
          <span className="relative inline-block px-3 pb-1">
            {profile.name}
            {/* SVG de elipse desenhada à mão contornando o nome */}
            <svg
              className="absolute inset-0 -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] -z-10 pointer-events-none"
              viewBox="0 0 220 90"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M15 45 C 10 15, 65 5, 110 8 C 165 11, 215 20, 208 45 C 200 75, 140 86, 95 83 C 45 80, 8 68, 15 45 Z"
                stroke={profile.theme.yellow}
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ filter: 'url(#roughen)' }}
              />
            </svg>
          </span>
        </motion.h1>

        {/* Cargo e Frase de Efeito */}
        <p
          className="font-architects text-xl sm:text-2xl mt-2 font-medium leading-snug"
          style={{ color: profile.theme.blue }}
        >
          {profile.role}
        </p>

        <p
          className="font-roboto text-sm sm:text-base max-w-[52ch] mt-4 leading-relaxed"
          style={{ color: profile.theme.pencil }}
        >
          {profile.bio}
        </p>

        {/* Botões de Ação Principais */}
        <div className="mt-8 flex flex-wrap gap-4 items-center">
          <a
            href="#trabalhos"
            onClick={() => soundManager.playPaperRustle()}
            className="sketchy inline-flex items-center gap-2 font-mono text-sm px-6 py-3.5 cursor-pointer no-underline transition-all duration-200 active:scale-95 shadow-xs font-bold"
            style={{
              backgroundColor: profile.theme.ink,
              color: profile.theme.paper,
              border: `2px solid ${profile.theme.ink}`,
            }}
          >
            <span>ver trabalhos</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="#contato"
            onClick={() => soundManager.playClick()}
            className="sketchy inline-flex items-center gap-2 font-mono text-sm px-5 py-3 cursor-pointer no-underline transition-all duration-200 active:scale-95 border-2 font-bold"
            style={{
              borderColor: profile.theme.ink,
              color: profile.theme.ink,
              backgroundColor: 'transparent',
            }}
          >
            <Mail className="w-4 h-4" />
            <span>bater um papo</span>
          </a>

          <a
            href={`mailto:${profile.contact.email}?subject=Contato%20via%20Portfolio`}
            onClick={() => soundManager.playClick()}
            className="font-mono text-xs flex items-center gap-1.5 opacity-75 hover:opacity-100 transition-opacity underline cursor-pointer"
            style={{ color: profile.theme.pencil }}
          >
            <Download className="w-3.5 h-3.5" />
            <span>solicitar currículo</span>
          </a>
        </div>

        {/* Mini Grid de Estatísticas / Destaques Rápidos */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t-2 border-dashed" style={{ borderColor: profile.theme.line }}>
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xs transition-transform hover:-translate-y-0.5"
              style={{
                backgroundColor: profile.theme.paper2,
                border: `1px solid ${profile.theme.line}`,
              }}
            >
              <div className="font-caveat font-bold text-2xl sm:text-3xl leading-none" style={{ color: profile.theme.red }}>
                {stat.value}
              </div>
              <div className="font-mono text-[0.72rem] font-bold mt-1 leading-tight" style={{ color: profile.theme.ink }}>
                {stat.label}
              </div>
              <div className="font-roboto text-[0.65rem] opacity-70 mt-0.5" style={{ color: profile.theme.pencil }}>
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Coluna Direita: Moldura de Retrato Desenhada com Avatar Ilustrado */}
      <div className="flex flex-col items-center justify-center">
        <div
          className="relative w-full max-w-[320px] aspect-[1/1.12] p-4 sketchy -rotate-1 transition-all duration-300 hover:rotate-0"
          style={{
            backgroundColor: profile.theme.paper2,
            border: `2.5px solid ${profile.theme.ink}`,
            boxShadow: '6px 8px 0px rgba(0,0,0,0.12)',
          }}
        >
          {/* Fita adesiva colada no topo da moldura */}
          <div
            className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-7 -rotate-2 opacity-80 shadow-xs"
            style={{
              backgroundColor: profile.theme.yellow,
              border: '1px dashed rgba(0,0,0,0.15)',
            }}
          />

          {/* Carimbo no canto inferior do retrato */}
          <div
            className="absolute -bottom-3 -right-3 px-2 py-1 font-mono text-[0.6rem] font-bold uppercase rotate-6 shadow-xs border"
            style={{
              backgroundColor: profile.theme.paper,
              borderColor: profile.theme.red,
              color: profile.theme.red,
            }}
          >
            ✓ Lab 2026
          </div>

          {/* Ilustração Vetorial Desenhada à Mão Personalizada */}
          <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
            {profile.avatarType === 'murilo' ? (
              /* Ilustração Avatar do Murilo */
              <svg className="w-full h-full" viewBox="0 0 200 220" fill="none">
                {/* Cabeça / Formato de Rosto */}
                <path
                  d="M50 85 C 45 35, 155 35, 150 85 C 152 128, 140 162, 100 166 C 60 162, 48 128, 50 85 Z"
                  stroke={profile.theme.ink}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Cabelo curto despojado */}
                <path
                  d="M45 68 C 42 35, 70 18, 100 18 C 130 18, 158 35, 155 68 C 145 42, 115 35, 100 36 C 85 35, 55 42, 45 68 Z"
                  fill={profile.theme.ink}
                />
                {/* Óculos de desenvolvedor */}
                <rect x="58" y="78" width="34" height="24" rx="4" stroke={profile.theme.ink} strokeWidth="3" fill="none" />
                <rect x="108" y="78" width="34" height="24" rx="4" stroke={profile.theme.ink} strokeWidth="3" fill="none" />
                <path d="M92 88 L 108 88" stroke={profile.theme.ink} strokeWidth="3" strokeLinecap="round" />
                {/* Olhos e pupilas */}
                <circle cx="75" cy="90" r="3" fill={profile.theme.ink} />
                <circle cx="125" cy="90" r="3" fill={profile.theme.ink} />
                {/* Nariz sutil */}
                <path d="M100 95 L 97 108 L 104 108" stroke={profile.theme.ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Sorriso simpático com detalhe colorido */}
                <path d="M80 125 Q 100 142, 120 125" stroke={profile.theme.red} strokeWidth="3.5" strokeLinecap="round" />
                {/* Barba sutil desenhada em pontilhado/hachuras */}
                <path d="M82 142 Q 100 152, 118 142" stroke={profile.theme.pencil} strokeWidth="2" strokeDasharray="3 3" />
                {/* Ombro e gola de camisa/hoodie */}
                <path d="M30 185 C 60 165, 140 165, 170 185 L 180 220 L 20 220 Z" stroke={profile.theme.ink} strokeWidth="3" fill={profile.theme.paper} />
                {/* Símbolo de código na camisa */}
                <text x="82" y="202" fontFamily="monospace" fontSize="14" fill={profile.theme.blue} fontWeight="bold">&lt; / &gt;</text>
              </svg>
            ) : (
              /* Ilustração Avatar da Letícia */
              <svg className="w-full h-full" viewBox="0 0 200 220" fill="none">
                {/* Cabelo longo ondulado de fundo */}
                <path
                  d="M38 70 C 25 120, 30 170, 42 205 C 55 170, 48 110, 52 70 Z"
                  fill={profile.theme.ink}
                />
                <path
                  d="M162 70 C 175 120, 170 170, 158 205 C 145 170, 152 110, 148 70 Z"
                  fill={profile.theme.ink}
                />
                {/* Rosto */}
                <path
                  d="M55 85 C 50 40, 150 40, 145 85 C 148 126, 138 160, 100 164 C 62 160, 52 126, 55 85 Z"
                  stroke={profile.theme.ink}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                {/* Cabelo frontal com volume e franja */}
                <path
                  d="M48 65 C 50 30, 80 20, 100 20 C 120 20, 150 30, 152 65 C 135 40, 110 38, 100 42 C 88 38, 65 40, 48 65 Z"
                  fill={profile.theme.ink}
                />
                {/* Olhos marcantes */}
                <path d="M68 90 Q 76 82, 84 90" stroke={profile.theme.ink} strokeWidth="3" strokeLinecap="round" />
                <circle cx="76" cy="90" r="3.2" fill={profile.theme.ink} />
                <path d="M116 90 Q 124 82, 132 90" stroke={profile.theme.ink} strokeWidth="3" strokeLinecap="round" />
                <circle cx="124" cy="90" r="3.2" fill={profile.theme.ink} />
                {/* Nariz delicado */}
                <path d="M100 96 L 98 106 L 103 106" stroke={profile.theme.ink} strokeWidth="2.2" strokeLinecap="round" />
                {/* Sorriso e batom sutil */}
                <path d="M78 126 Q 100 144, 122 126" stroke={profile.theme.red} strokeWidth="3.5" strokeLinecap="round" />
                {/* Brincos / detalhe geométrico */}
                <circle cx="50" cy="115" r="3.5" fill={profile.theme.yellow} stroke={profile.theme.ink} strokeWidth="1.5" />
                <circle cx="150" cy="115" r="3.5" fill={profile.theme.yellow} stroke={profile.theme.ink} strokeWidth="1.5" />
                {/* Ombro e gola */}
                <path d="M35 185 C 65 168, 135 168, 165 185 L 175 220 L 25 220 Z" stroke={profile.theme.ink} strokeWidth="3" fill={profile.theme.paper} />
                {/* Ícone de fluxo de dados na camisa */}
                <text x="86" y="202" fontFamily="monospace" fontSize="13" fill={profile.theme.blue} fontWeight="bold">λ | ⛁</text>
              </svg>
            )}
          </div>
        </div>

        {/* Botão de Alternância Logo Abaixo do Retrato */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              soundManager.playPop();
              onToggleUser();
            }}
            className="sketchy font-mono text-xs font-bold px-4 py-2 cursor-pointer transition-transform active:scale-95 inline-flex items-center gap-2"
            style={{
              backgroundColor: profile.theme.yellow,
              color: '#221F1B',
              border: '2px solid #221F1B',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Alternar para {profile.id === 'murilo' ? 'Letícia' : 'Murilo'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};