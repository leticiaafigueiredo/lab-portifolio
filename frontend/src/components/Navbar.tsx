import React from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#sobre', label: 'sobre' },
  { href: '#trabalhos', label: 'trabalhos' },
  { href: '#habilidades', label: 'habilidades' },
  { href: '#contato', label: 'contato' },
];

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-[22px]">
      <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        animate={{ opacity: 1, x: 0 }} 
        className="font-['Caveat'] text-[2rem] font-bold text-[#221F1B]"
      >
        Ana Duarte
      </motion.div>
      <ul className="hidden md:flex gap-7 list-none m-0 p-0 font-['Space_Mono'] text-[0.82rem]">
        {navItems.map((item, index) => (
          <motion.li 
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a href={item.href} className="no-underline relative pb-1 group text-[#221F1B]">
              {item.label}
              <svg 
                className="absolute left-[-4%] bottom-[-6px] w-[108%] h-[10px] opacity-0 scale-x-80 group-hover:opacity-100 group-hover:scale-x-100 transition-all duration-200" 
                viewBox="0 0 100 10"
              >
                <path d="M2 6 Q 25 2, 50 6 T 98 5" stroke="#E14B32" strokeWidth="3" fill="none" strokeLinecap="round" />
              </svg>
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};