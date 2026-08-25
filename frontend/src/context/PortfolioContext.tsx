import React, { useState, useEffect } from 'react';
import type { ProfileId, Project } from '../types';
import { PROFILES } from '../data/portfolioData';
import { soundManager } from '../utils/soundEffects';
import { PortfolioContext } from './portfolioContextDef';

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<ProfileId>('murilo');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  const profile = PROFILES[currentUser];

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

  // Atualizar título da aba do navegador quando o perfil mudar
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = `${profile.fullName} — ${profile.role} | Portfólio 2026`;
    }
  }, [profile]);

  return (
    <PortfolioContext.Provider
      value={{
        currentUser,
        profile,
        toggleUser,
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