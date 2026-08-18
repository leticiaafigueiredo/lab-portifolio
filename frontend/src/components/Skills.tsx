import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-[70px] border-t-2 border-dashed border-[rgba(34,31,27,0.16)]" id="habilidades">
      <div className="flex items-baseline gap-[16px] mb-[44px]">
        <span className="font-['Space_Mono'] text-[#736A5C] text-[0.9rem]">03</span>
        <h2 className="font-['Caveat'] text-[2.8rem] font-bold m-0">ferramentas & traços</h2>
      </div>
      <div className="flex flex-wrap gap-[16px_22px]">
        {SKILLS.map((skill, idx) => (
          <div key={idx} className="flex flex-col gap-[8px] min-w-[150px] flex-1">
            <span className="font-['Architects_Daughter'] text-[1.05rem] text-[#221F1B]">{skill.name}</span>
            <div className="relative h-[14px] border-2 border-[#221F1B] rounded-[2px_8px_2px_8px/8px_2px_8px_2px] [filter:url(#roughen)]">
              <div 
                className="absolute top-[2px] bottom-[2px] left-[2px] bg-[#F4C23D] rounded-[1px_6px_1px_6px]" 
                style={{ width: `${skill.level}%` }} 
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};