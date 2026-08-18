import React, { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-[70px] border-t-2 border-dashed border-[rgba(34,31,27,0.16)]" id="contato">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] p-0 overflow-hidden relative border-2 border-[#221F1B] rounded-[3px_14px_4px_12px/12px_4px_14px_3px] [filter:url(#roughen)] bg-[#EFE6D2]">
        <div className="absolute top-[20px] right-[20px] w-[64px] h-[76px] border-[2px] border-dashed border-[#736A5C] flex items-center justify-center font-['Space_Mono'] text-[0.62rem] text-center text-[#736A5C] rotate-[4deg]">
          correio<br />criativo
        </div>
        <div className="p-[44px] border-b md:border-b-0 md:border-r-2 border-dashed border-[rgba(34,31,27,0.16)]">
          <h2 className="font-['Caveat'] text-[2.6rem] font-bold mb-[14px] m-0">vamos desenhar<br />algo juntos?</h2>
          <p className="text-[#736A5C] max-w-[38ch] m-0">
            Escreva contando sua ideia — mesmo que ainda esteja só num rascunho de guardanapo. Respondo em até 2 dias úteis.
          </p>
        </div>
        <div className="p-[44px] flex flex-col gap-[16px] justify-center">
          <a className="font-['Space_Mono'] text-[0.9rem] flex items-center gap-[10px] no-underline text-[#221F1B]" href="mailto:ana.duarte@exemplo.com">
            ✉ ana.duarte@exemplo.com
          </a>
          <a className="font-['Space_Mono'] text-[0.9rem] flex items-center gap-[10px] no-underline text-[#221F1B]" href="#">
            ✎ instagram/ana.rabisca
          </a>
          <a className="font-['Space_Mono'] text-[0.9rem] flex items-center gap-[10px] no-underline text-[#221F1B]" href="#">
            ✎ linkedin/anaduarte
          </a>
          <a className="font-['Space_Mono'] text-[0.9rem] flex items-center gap-[10px] no-underline text-[#221F1B]" href="tel:+5531999999999">
            ☎ +55 31 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
};