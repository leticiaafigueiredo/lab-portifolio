import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';
import type { ProfileTheme } from '../types';

interface ToastProps {
  message: string | null;
  type?: 'success' | 'info';
  onClose: () => void;
  theme: ProfileTheme;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'success', onClose, theme }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 40, rotate: -2, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 1, scale: 1 }}
          exit={{ opacity: 0, y: 20, rotate: 2, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div
            className="sketchy p-4 pr-10 shadow-lg relative flex items-start gap-3"
            style={{
              backgroundColor: theme.paper2,
              color: theme.ink,
              border: `2px solid ${theme.ink}`,
              boxShadow: '4px 6px 0px rgba(0,0,0,0.15)',
            }}
          >
            {/* Fita adesiva simulada no topo */}
            <div
              className="absolute -top-3 left-6 w-16 h-5 opacity-80 rotate-[-4deg]"
              style={{ backgroundColor: theme.yellow, border: '1px dashed rgba(0,0,0,0.2)' }}
            />

            <div className="mt-0.5 shrink-0" style={{ color: theme.red }}>
              {type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            </div>

            <div>
              <span className="font-mono text-[0.7rem] uppercase tracking-wider font-bold block opacity-75">
                {type === 'success' ? 'Nota Anotada!' : 'Informação'}
              </span>
              <p className="font-architects text-sm mt-0.5 leading-snug">
                {message}
              </p>
            </div>

            <button
              onClick={onClose}
              className="absolute top-2.5 right-2.5 p-1 rounded-full hover:bg-black/10 transition-colors"
              aria-label="Fechar notificação"
            >
              <X className="w-4 h-4 opacity-70 hover:opacity-100" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
