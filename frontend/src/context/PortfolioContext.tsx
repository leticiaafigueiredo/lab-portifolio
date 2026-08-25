import React, { useState, useEffect } from 'react';
import type { Language, ProfileId, Project } from '../types';
import { PROFILES_I18N } from '../data/portfolioData';
import { TRANSLATIONS } from '../data/translations';
import { soundManager } from '../utils/soundEffects';
import { PortfolioContext } from './portfolioContextDef';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ProfileId>('murilo');
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('lab_portfolio_lang');
      if (saved === 'en' || saved === 'pt') return saved;
    }
    return 'pt';
  });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const profile = PROFILES_I18N[language][currentUser];
  const t = TRANSLATIONS[language];

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lab_portfolio_lang', lang);
    }
  };

  const toggleLanguage = () => {
    soundManager.playPop();
    const nextLang: Language = language === 'pt' ? 'en' : 'pt';
    setLanguage(nextLang);
    showToast(nextLang === 'en' ? 'Switched to English! 🌐' : 'Mudado para Português! 🌐');
  };

  const toggleUser = () => {
    setCurrentUser((prev) => (prev === 'murilo' ? 'leticia' : 'murilo'));
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const clearToast = () => {
    setToastMessage(null);
  };

  const toggleSound = () => {
    const next = !isMuted;
    setIsMuted(next);
    soundManager.enabled = !next;
  };

  // Atualizar título da aba do navegador quando o perfil ou idioma mudar
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const suffix = language === 'pt' ? 'Portfólio 2026' : 'Portfolio 2026';
      document.title = `${profile.fullName} — ${profile.role} | ${suffix}`;
    }
  }, [profile, language]);

  return (
    <PortfolioContext.Provider
      value={{
        currentUser,
        profile,
        toggleUser,
        language,
        setLanguage,
        toggleLanguage,
        t,
        selectedProject,
        setSelectedProject,
        toastMessage,
        showToast,
        clearToast,
        isMuted,
        toggleSound,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};