import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PROJECTS } from '../data/portfolioData';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-[70px] border-t-2 border-dashed border-[rgba(34,31,27,0.16)]" id="trabalhos">
      <div className="flex items-baseline gap-[16px] mb-[44px]">
        <span className="font-['Space_Mono'] text-[#736A5C] text-[0.9rem]">02</span>
        <h2 className="font-['Caveat'] text-[2.8rem] font-bold m-0">trabalhos recentes</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px]">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="p-[22px] relative transition-transform duration-250 hover:rotate-0 hover:-translate-y-1 bg-[#F6EFE1] border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)]"
            style={{ transform: idx % 2 === 0 ? 'rotate(-1.2deg)' : 'rotate(1deg)' }}
          >
            <div className="absolute top-[-9px] left-[24px] w-[16px] h-[16px] rounded-full bg-[#E14B32] shadow-[0_2px_3px_rgba(0,0,0,0.25)] z-10" />
            <div className="h-[150px] mb-[16px] relative overflow-hidden bg-[#EFE6D2] border border-[#221F1B] rounded-[2px]" />
            <h3 className="font-['Caveat'] text-[1.9rem] font-bold m-0">{project.title}</h3>
            <p className="text-[#736A5C] text-[0.94rem] my-[8px] mb-[14px]">{project.description}</p>
            <div className="flex flex-wrap gap-[8px]">
              {project.tags.map((tag, tIdx) => (
                <span key={tIdx} className="font-['Space_Mono'] text-[0.7rem] px-[9px] py-[4px] border-[1.5px] border-[#221F1B] rounded-[2px_8px_2px_8px] text-[#221F1B]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};