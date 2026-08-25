import React, { useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import type { ProfileData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface SkillsProps {
  profile: ProfileData;
}

export const Skills: React.FC<SkillsProps> = ({ profile }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20"
      id="habilidades"
      style={{ borderTop: `2px dashed ${profile.theme.line}` }}
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-baseline gap-4 mb-8">
        <span className="font-mono text-sm font-bold" style={{ color: profile.theme.pencil }}>
          03 //
        </span>
        <h2 className="font-caveat font-bold m-0 leading-tight text-4xl sm:text-5xl" style={{ color: profile.theme.ink }}>
          ferramentas & stack
        </h2>
      </div>

      <p className="font-roboto text-sm sm:text-base max-w-[60ch] mb-10 leading-relaxed" style={{ color: profile.theme.pencil }}>
        Tecnologias, frameworks e ferramentas que utilizo diariamente para criar soluções de ponta a ponta com alta fidelidade, robustez e performance.
      </p>

      {/* Seletor de Categorias de Habilidades (Abas Estilo Caderno) */}
      <div className="flex flex-wrap gap-2 mb-8">
        {profile.skillsCategories.map((cat, idx) => {
          const isActive = activeCategoryIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => {
                soundManager.playClick();
                setActiveCategoryIndex(idx);
              }}
              className="sketchy px-4 py-2 font-mono text-xs font-bold cursor-pointer transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: isActive ? profile.theme.ink : profile.theme.paper2,
                color: isActive ? profile.theme.paper : profile.theme.ink,
                border: `2px solid ${profile.theme.ink}`,
              }}
            >
              {cat.category}
            </button>
          );
        })}
      </div>

      {/* Conteúdo da Categoria Ativa */}
      {profile.skillsCategories[activeCategoryIndex] && (
        <div
          className="sketchy p-6 sm:p-8 relative"
          style={{
            backgroundColor: profile.theme.paper,
            border: `2px solid ${profile.theme.ink}`,
            boxShadow: '4px 6px 0px rgba(0,0,0,0.08)',
          }}
        >
          {/* Fita adesiva */}
          <div
            className="absolute -top-3 right-8 w-24 h-5 opacity-70 rotate-2"
            style={{ backgroundColor: profile.theme.yellow, border: '1px dashed rgba(0,0,0,0.2)' }}
          />

          <div className="mb-6">
            <h3 className="font-caveat text-2xl sm:text-3xl font-bold m-0" style={{ color: profile.theme.ink }}>
              {profile.skillsCategories[activeCategoryIndex].category}
            </h3>
            <p className="font-architects text-sm mt-1" style={{ color: profile.theme.blue }}>
              {profile.skillsCategories[activeCategoryIndex].description}
            </p>
          </div>

          {/* Grid de Barras de Habilidades */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {profile.skillsCategories[activeCategoryIndex].skills.map((skill, idx) => (
              <div key={idx} className="flex flex-col gap-2 group">
                <div className="flex items-center justify-between">
                  <span className="font-architects text-base font-bold" style={{ color: profile.theme.ink }}>
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-xs">
                    {skill.experience && (
                      <span className="opacity-60 text-[0.7rem]" style={{ color: profile.theme.pencil }}>
                        {skill.experience}
                      </span>
                    )}
                    <span className="font-bold" style={{ color: profile.theme.red }}>
                      {skill.level}%
                    </span>
                  </div>
                </div>

                {/* Barra de Progresso Estilo Rabisco de Lápis */}
                <div
                  className="relative h-4 rounded-xs border-2 overflow-hidden"
                  style={{
                    borderColor: profile.theme.ink,
                    backgroundColor: profile.theme.paper2,
                  }}
                >
                  <div
                    className="absolute inset-y-0 left-0 transition-all duration-700 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: profile.theme.yellow,
                      borderRight: `2px solid ${profile.theme.ink}`,
                    }}
                  />
                </div>

                {/* Descrição Detalhada da Aplicação */}
                {skill.description && (
                  <p className="font-roboto text-xs leading-snug m-0 opacity-80" style={{ color: profile.theme.pencil }}>
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Nuvem Rápida de Todas as Tecnologias */}
      <div className="mt-12 p-6 rounded-sm border-2 border-dashed" style={{ borderColor: profile.theme.line, backgroundColor: profile.theme.paper2 }}>
        <h4 className="font-mono text-xs uppercase tracking-widest font-bold mb-3 flex items-center gap-2" style={{ color: profile.theme.pencil }}>
          <Sparkles className="w-3.5 h-3.5" style={{ color: profile.theme.red }} />
          Visão Geral do Ecossistema
        </h4>
        <div className="flex flex-wrap gap-2">
          {profile.skillsCategories
            .flatMap((c) => c.skills)
            .map((s, idx) => (
              <span
                key={idx}
                className="font-mono text-xs px-2.5 py-1 rounded-xs border transition-all hover:scale-105"
                style={{
                  borderColor: profile.theme.ink,
                  backgroundColor: profile.theme.paper,
                  color: profile.theme.ink,
                }}
              >
                {s.name}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};