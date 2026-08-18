import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const notes = [
  '7 anos criando identidades visuais',
  '+40 projetos entregues',
  'ilustração ao vivo em eventos',
  'sempre com um caderno na bolsa',
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-[70px] border-t-2 border-dashed border-[rgba(34,31,27,0.16)]" id="sobre">
      <div className="flex items-baseline gap-[16px] mb-[44px]">
        <span className="font-['Space_Mono'] text-[#736A5C] text-[0.9rem]">01</span>
        <h2 className="font-['Caveat'] text-[2.8rem] font-bold m-0">sobre o caderno</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] items-start">
        <div className="p-[26px_26px_30px] relative bg-[#EFE6D2] rotate-[0.8deg] border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)]">
          <span className="font-['Space_Mono'] text-[0.72rem] uppercase tracking-[0.12em] text-[#736A5C]">nota pessoal</span>
          <p className="mt-[14px] text-[#736A5C]">
            Comecei desenhando nas margens de cadernos escolares e nunca parei — só troquei o lápis por Figma de vez em quando. Hoje ajudo marcas e produtos a parecerem feitos por gente, não por um sistema de design genérico.
          </p>
          <p className="mt-[14px] text-[#736A5C]">
            Formada em Design Gráfico (UFMG), com passagens por estúdios de branding e times de produto. Café, tinta nanquim e prazos apertados são meu combustível.
          </p>
        </div>
        <div className="flex flex-col gap-[22px]">
          {notes.map((note, idx) => (
            <div key={idx} className="font-['Architects_Daughter'] text-[1.05rem] text-[#221F1B] relative pl-[34px]">
              <svg className="absolute left-0 top-[2px] w-[24px] h-[24px]" viewBox="0 0 24 24" fill="none">
                <path d="M4 12 C 4 4, 20 4, 20 12 C 20 20, 4 20, 4 12 Z" stroke="#33538E" strokeWidth="2" />
              </svg>
              {note}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};