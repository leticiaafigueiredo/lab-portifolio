import React, { createContext, useContext, useState } from 'react';

interface PortfolioContextData {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const PortfolioContext = createContext<PortfolioContextData>({} as PortfolioContextData);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSection, setActiveSection] = useState('sobre');

  return (
    <PortfolioContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => useContext(PortfolioContext);