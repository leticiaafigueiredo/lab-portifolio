import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowLeftRight, Sparkles } from 'lucide-react';
import type { ProfileData, ProfileId } from '../types';
import { soundManager } from '../utils/soundEffects';

interface NavbarProps {
  profile: ProfileData;
  currentUser: ProfileId;
  onToggleUser: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
}

const navLinks = [
  { href: '#sobre', label: 'sobre', num: '01' },
  { href: '#trabalhos', label: 'trabalhos', num: '02' },
  { href: '#habilidades', label: 'habilidades', num: '03' },
  { href: '#rabiscos', label: 'rabiscos', num: '04' },
  { href: '#contato', label: 'contato', num: '05' },
];

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  currentUser,
  onToggleUser,
  isMuted,
  onToggleSound,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const targetName = currentUser === 'murilo' ? 'Letícia' : 'Murilo';
  const targetRole = currentUser === 'murilo' ? 'Engenharia de Dados' : 'Full-Stack Dev';

  const handleLinkClick = () => {
    soundManager.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-40 w-full transition-colors duration-300 backdrop-blur-md"
      style={{
        backgroundColor: `${profile.theme.paper}E6`,
        borderBottom: `1.5px dashed ${profile.theme.line}`,
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between">
        {/* Logo / Assinatura */}
        <a
          href="#"
          onClick={() => soundManager.playPaperRustle()}
          className="flex items-baseline gap-1.5 no-underline group cursor-pointer"
        >
          <span
            className="font-caveat text-3xl sm:text-4xl font-bold tracking-tight transition-transform group-hover:scale-105"
            style={{ color: profile.theme.ink }}
          >
            {profile.name}
          </span>
          <span
            className="font-mono text-sm font-bold px-1.5 py-0.5 rounded-xs"
            style={{
              backgroundColor: profile.theme.yellow,
              color: '#221F1B',
            }}
          >
            .lab
          </span>
        </a>

        {/* Links de Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-6 list-none m-0 p-0 font-mono text-[0.82rem]">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={handleLinkClick}
              className="group relative py-1 px-1 no-underline transition-opacity hover:opacity-100"
              style={{ color: profile.theme.ink }}
            >
              <span className="opacity-40 text-[0.7rem] mr-1">{item.num}.</span>
              <span className="font-medium">{item.label}</span>
              {/* Traço de lápis vermelho/azul animado no hover */}
              <svg
                className="absolute left-0 -bottom-1 w-full h-[6px] opacity-0 group-hover:opacity-100 transition-all duration-200"
                viewBox="0 0 100 8"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5 Q 30 1, 60 5 T 99 4"
                  stroke={profile.theme.red}
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </a>
          ))}
        </nav>

        {/* Controles: Switch de Perfil + Áudio + Menu Mobile */}
        <div className="flex items-center gap-2.5">
          {/* Botão de Som / Mudo */}
          <button
            onClick={() => {
              onToggleSound();
              if (isMuted) soundManager.playPop();
            }}
            title={isMuted ? 'Ativar efeitos sonoros de papel' : 'Desativar efeitos sonoros'}
            aria-label="Controle de áudio"
            className="p-2 cursor-pointer rounded-sm border transition-transform active:scale-95 flex items-center justify-center"
            style={{
              borderColor: profile.theme.line,
              backgroundColor: profile.theme.paper2,
              color: profile.theme.ink,
            }}
          >
            {isMuted ? <VolumeX className="w-4 h-4 opacity-60" /> : <Volume2 className="w-4 h-4" style={{ color: profile.theme.red }} />}
          </button>

          {/* Botão de Alternância de Perfil (Destaque Principal) */}
          <button
            onClick={() => {
              soundManager.playPaperRustle();
              onToggleUser();
            }}
            className="sketchy group relative cursor-pointer px-3 sm:px-4 py-1.5 font-mono text-xs font-bold transition-all duration-200 active:scale-95 flex items-center gap-2 shadow-xs"
            style={{
              backgroundColor: profile.theme.yellow,
              color: '#221F1B',
              border: '2px solid #221F1B',
            }}
            title={`Ver portfólio de ${targetName} (${targetRole})`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" />
            <span className="hidden sm:inline">Mudar p/</span>
            <span>{targetName}</span>
            <Sparkles className="w-3 h-3 text-red-600 animate-pulse" />
          </button>

          {/* Botão Hambúrguer Mobile */}
          <button
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-sm border cursor-pointer"
            style={{
              borderColor: profile.theme.ink,
              backgroundColor: profile.theme.paper2,
              color: profile.theme.ink,
            }}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-b-2 border-dashed overflow-hidden"
            style={{
              backgroundColor: profile.theme.paper2,
              borderColor: profile.theme.line,
            }}
          >
            <div className="px-6 py-4 flex flex-col gap-3 font-mono text-sm">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center justify-between py-2 border-b border-dashed no-underline text-inherit hover:opacity-75"
                  style={{ borderColor: profile.theme.line }}
                >
                  <span>{item.label}</span>
                  <span className="text-xs opacity-50">{item.num} →</span>
                </a>
              ))}
              <div className="pt-2 flex items-center justify-between text-xs opacity-75 font-architects">
                <span>Vendo: {profile.fullName}</span>
                <span>{profile.role}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};