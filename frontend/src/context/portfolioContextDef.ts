import { createContext } from 'react';
import type { ProfileData, ProfileId, Project } from '../types';

export interface PortfolioContextType {
  currentUser: ProfileId;
  profile: ProfileData;
  toggleUser: () => void;
  selectedProject: Project | null;
  setSelectedProject: (project: Project | null) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  clearToast: () => void;
  isMuted: boolean;
  toggleSound: () => void;
}

export const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);
