import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, ArrowLeftRight, Sparkles, Languages } from 'lucide-react';
import type { Language, ProfileData, ProfileId } from '../types';
import type { Translations } from '../data/translations';
import { soundManager } from '../utils/soundEffects';

interface NavbarProps {
  profile: ProfileData;
  currentUser: ProfileId;
  onToggleUser: () => void;
  language: Language;
  onToggleLanguage: () => void;
  isMuted: boolean;
  onToggleSound: () => void;
  t: Translations['nav'];
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  currentUser,
  onToggleUser,
  language,
  onToggleLanguage,
  isMuted,
  onToggleSound,
  t,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const targetName = currentUser === 'murilo' ? 'Letícia' : 'Murilo';
  const targetRole = currentUser === 'murilo'
    ? (language === 'pt' ? 'Engenharia de Dados' : 'Data Engineering')
    : (language === 'pt' ? 'Full-Stack Dev' : 'Full-Stack Dev');

  const navLinks = [
    { href: '#sobre', label: t.about, num: '01' },
    { href: '#trabalhos', label: t.works, num: '02' },
    { href: '#habilidades', label: t.skills, num: '03' },
    { href: '#rabiscos', label: t.doodles, num: '04' },
    { href: '#contato', label: t.contact, num: '05' },
  ];

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

        {/* Controles: Idioma + Som + Switch de Perfil + Menu Mobile */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Botão de Troca de Idioma (PT / EN) */}
          <button
            onClick={onToggleLanguage}
            title={t.langTitle}
            aria-label="Trocar idioma"
            className="sketchy px-2.5 sm:px-3 py-1.5 font-mono text-xs font-bold transition-all duration-200 active:scale-95 flex items-center gap-1.5 cursor-pointer shadow-xs"
            style={{
              backgroundColor: profile.theme.paper2,
              color: profile.theme.ink,
              border: `1.5px solid ${profile.theme.ink}`,
            }}
          >
            <Languages className="w-3.5 h-3.5" style={{ color: profile.theme.red }} />
            <span className="tracking-wider">{language === 'pt' ? 'EN' : 'PT'}</span>
          </button>

          {/* Botão de Som / Mudo */}
          <button
            onClick={() => {
              onToggleSound();
              if (isMuted) soundManager.playPop();
            }}
            title={isMuted ? t.soundToggleUnmute : t.soundToggleMute}
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
            title={`${t.switchTo} ${targetName} (${targetRole})`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5 transition-transform group-hover:rotate-180 duration-300" />
            <span className="hidden sm:inline">{t.switchTo}</span>
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

              {/* Linha de Idioma no Menu Mobile */}
              <div className="pt-2 flex items-center justify-between text-xs border-b border-dashed pb-3" style={{ borderColor: profile.theme.line }}>
                <span className="opacity-75">Idioma / Language:</span>
                <button
                  onClick={() => {
                    onToggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="sketchy px-3 py-1 font-bold flex items-center gap-1.5"
                  style={{
                    backgroundColor: profile.theme.yellow,
                    color: '#221F1B',
                    border: '1.5px solid #221F1B',
                  }}
                >
                  <Languages className="w-3.5 h-3.5" />
                  <span>{language === 'pt' ? 'Mudar para Inglês (EN)' : 'Switch to Portuguese (PT)'}</span>
                </button>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs opacity-75 font-architects">
                <span>{t.viewing} {profile.fullName}</span>
                <span>{profile.role}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};