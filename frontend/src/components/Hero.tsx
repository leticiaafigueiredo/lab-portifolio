import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal(heroRef);

  return (
    <section ref={heroRef} className="py-[56px] pb-[90px] grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
      <div>
        <span className="inline-block px-[14px] py-[6px] mb-[18px] font-['Space_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[#736A5C] relative border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)]">
          portfólio 2026
        </span>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-['Caveat'] text-[5px] md:text-[5rem] font-bold text-[#221F1B] leading-[1.05] m-0 mb-[6px]"
        >
          Oi, eu sou<br />
          <span className="relative inline-block px-[6px]">
            Ana
            <svg className="absolute inset-[-14px_-10px] w-[calc(100%+20px)] h-[calc(100%+28px)] -z-10" viewBox="0 0 200 90" fill="none">
              <path d="M15 45 C 10 15, 60 5, 100 8 C 150 11, 195 20, 190 45 C 186 72, 130 85, 90 82 C 45 79, 8 68, 15 45 Z" stroke="#F4C23D" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>{' '}
          Duarte
        </motion.h1>
        <p className="font-['Architects_Daughter'] text-[1.35rem] text-[#33538E] mt-[6px]">
          designer & ilustradora — desenho ideias antes de digitá-las
        </p>
        <p className="max-w-[46ch] mt-[20px] text-[#736A5C]">
          Trabalho na fronteira entre rabisco e produto: identidade visual, ilustração editorial e interfaces que parecem ter saído de um caderno de anotações — de propósito.
        </p>
        <div className="mt-[30px] flex gap-[18px] items-center">
          <a href="#trabalhos" className="font-['Space_Mono'] text-[0.85rem] bg-[#221F1B] text-[#F6EFE1] border-none px-[24px] py-[14px] cursor-pointer relative no-underline inline-block border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)]">
            ver trabalhos →
          </a>
          <a href="#contato" className="font-['Space_Mono'] text-[0.85rem] bg-transparent text-[#221F1B] px-[22px] py-[12px] cursor-pointer relative no-underline inline-block border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)]">
            bater um papo
          </a>
        </div>
      </div>

      <div className="relative aspect-[1/1.05] rotate-[-1.5deg] border-[2.5px] border-[#221F1B] rounded-[4px_16px_4px_18px/16px_4px_20px_4px] [filter:url(#roughen)] bg-[#EFE6D2] p-[14px]">
        <div className="absolute w-[70px] h-[26px] bg-[rgba(244,194,61,0.55)] top-[-14px] left-1/2 -translate-x-1/2 rotate-[-3deg] shadow-[0_1px_2px_rgba(0,0,0,0.15)]" />
        <svg className="absolute inset-[14px] w-[calc(100%-28px)] h-[calc(100%-28px)]" viewBox="0 0 200 210" fill="none">
          <path d="M50 90 C 45 40, 150 40, 148 92 C 150 130, 140 165, 100 168 C 60 165, 48 130, 50 90 Z" stroke="#221F1B" strokeWidth="3" strokeLinecap="round" />
          <path d="M68 92 Q 74 85, 82 92" stroke="#221F1B" strokeWidth="3" strokeLinecap="round" />
          <path d="M118 92 Q 124 85, 132 92" stroke="#221F1B" strokeWidth="3" strokeLinecap="round" />
          <path d="M80 122 Q 100 138, 120 122" stroke="#E14B32" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M40 60 C 55 15, 145 15, 160 60" stroke="#221F1B" strokeWidth="3" strokeLinecap="round" />
          <path d="M30 178 C 60 195, 140 195, 170 178" stroke="#221F1B" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>
    </section>
  );
};