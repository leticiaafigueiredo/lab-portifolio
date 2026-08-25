import { useContext } from 'react';
import { PortfolioContext } from '../context/portfolioContextDef';
import type { PortfolioContextType } from '../context/portfolioContextDef';

export const usePortfolio = (): PortfolioContextType => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio deve ser usado dentro de um PortfolioProvider');
  }
  return context;
};
