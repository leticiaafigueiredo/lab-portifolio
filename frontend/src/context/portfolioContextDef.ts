import { createContext } from 'react';
import type { Language, ProfileData, ProfileId, Project } from '../types';
import type { Translations } from '../data/translations';

export interface PortfolioContextType {
  currentUser: ProfileId;
  profile: ProfileData;
  toggleUser: () => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  clearToast: () => void;
  isMuted: boolean;
  toggleSound: () => void;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
