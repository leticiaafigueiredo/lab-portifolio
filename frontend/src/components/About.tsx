import React, { useRef, useState } from 'react';
import { Briefcase, GraduationCap, Award, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import type { ProfileData } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [timelineFilter, setTimelineFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredTimeline = profile.timeline.filter((item) => {
    if (timelineFilter === 'all') return true;
    return item.type === timelineFilter;
  });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20"
      id="sobre"
      style={{ borderTop: `2px dashed ${profile.theme.line}` }}
    >
      {/* Cabeçalho da Seção */}
      <div className="flex items-baseline gap-4 mb-10">
        <span className="font-mono text-sm font-bold" style={{ color: profile.theme.pencil }}>
          01 //
        </span>
        <h2 className="font-caveat font-bold m-0 leading-tight text-4xl sm:text-5xl" style={{ color: profile.theme.ink }}>
          minha trajetória & notas
        </h2>
      </div>

      {/* Grid Principal: Cartão Pessoal + Destaques */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        {/* Cartão de Ficha Pautada / Index Card */}
        <div
          className="lg:col-span-7 sketchy p-6 sm:p-8 relative rotate-[0.5deg] transition-transform hover:rotate-0"
          style={{
            backgroundColor: profile.theme.paper2,
            border: `2px solid ${profile.theme.ink}`,
            boxShadow: '5px 7px 0px rgba(0,0,0,0.08)',
          }}
        >
          {/* Fita adesiva */}
          <div
            className="absolute -top-3 left-8 w-24 h-5 opacity-75 rotate-[-2deg]"
            style={{ backgroundColor: profile.theme.yellow, border: '1px dashed rgba(0,0,0,0.15)' }}
          />

          <span
            className="font-mono text-[0.72rem] tracking-widest uppercase font-bold block mb-4"
            style={{ color: profile.theme.pencil }}
          >
            ★ bloco de anotações pessoais
          </span>

          <div className="space-y-4 font-roboto text-sm sm:text-base leading-relaxed" style={{ color: profile.theme.ink }}>
            {profile.longBio.map((paragraph, idx) => (
              <p key={idx} className="m-0">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-dashed flex flex-wrap items-center justify-between gap-3 text-xs font-mono" style={{ borderColor: profile.theme.line }}>
            <span style={{ color: profile.theme.pencil }}>📍 {profile.contact.location}</span>
            <span className="font-bold" style={{ color: profile.theme.red }}>{profile.contact.availability}</span>
          </div>
        </div>

        {/* Post-it de Princípios e Destaques */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div
            className="sketchy p-6 relative -rotate-1"
            style={{
              backgroundColor: profile.theme.paper,
              border: `2px solid ${profile.theme.ink}`,
            }}
          >
            {/* Alfinete no topo */}
            <div
              className="absolute -top-2 left-6 w-4 h-4 rounded-full shadow-xs"
              style={{ backgroundColor: profile.theme.red }}
            />

            <h3 className="font-caveat text-2xl font-bold mb-4 m-0" style={{ color: profile.theme.ink }}>
              o que me move no dia a dia:
            </h3>

            <div className="space-y-3">
              {profile.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: profile.theme.blue }} />
                  <span className="font-architects text-sm sm:text-base leading-snug" style={{ color: profile.theme.ink }}>
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Citação / Mantra */}
          <div
            className="p-4 rounded-xs border-l-4 font-architects text-base sm:text-lg italic"
            style={{
              backgroundColor: profile.theme.paper2,
              borderColor: profile.theme.yellow,
              color: profile.theme.pencil,
            }}
          >
            "{profile.tagline}"
          </div>
        </div>
      </div>

      {/* Linha do Tempo / Caderno de Experiências */}
      <div className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-caveat font-bold text-3xl sm:text-4xl m-0" style={{ color: profile.theme.ink }}>
              jornada profissional & estudos
            </h3>
            <p className="font-mono text-xs mt-1" style={{ color: profile.theme.pencil }}>
              marcos cronológicos e projetos por onde passei
            </p>
          </div>

          {/* Filtros da Linha do Tempo */}
          <div className="flex gap-1.5 p-1 rounded-sm border" style={{ borderColor: profile.theme.line, backgroundColor: profile.theme.paper2 }}>
            <button
              onClick={() => {
                soundManager.playClick();
                setTimelineFilter('all');
              }}
              className={`font-mono text-xs px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                timelineFilter === 'all' ? 'font-bold' : 'opacity-70'
              }`}
              style={{
                backgroundColor: timelineFilter === 'all' ? profile.theme.ink : 'transparent',
                color: timelineFilter === 'all' ? profile.theme.paper : profile.theme.ink,
              }}
            >
              Todos
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setTimelineFilter('work');
              }}
              className={`font-mono text-xs px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                timelineFilter === 'work' ? 'font-bold' : 'opacity-70'
              }`}
              style={{
                backgroundColor: timelineFilter === 'work' ? profile.theme.ink : 'transparent',
                color: timelineFilter === 'work' ? profile.theme.paper : profile.theme.ink,
              }}
            >
              Experiência
            </button>
            <button
              onClick={() => {
                soundManager.playClick();
                setTimelineFilter('education');
              }}
              className={`font-mono text-xs px-3 py-1 rounded-xs transition-colors cursor-pointer ${
                timelineFilter === 'education' ? 'font-bold' : 'opacity-70'
              }`}
              style={{
                backgroundColor: timelineFilter === 'education' ? profile.theme.ink : 'transparent',
                color: timelineFilter === 'education' ? profile.theme.paper : profile.theme.ink,
              }}
            >
              Formação
            </button>
          </div>
        </div>

        {/* Lista de Itens da Linha do Tempo */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed space-y-8" style={{ borderColor: profile.theme.line }}>
          {filteredTimeline.map((item) => (
            <div key={item.id} className="relative group">
              {/* Marcador do Ponto da Linha */}
              <div
                className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-xs"
                style={{
                  backgroundColor: item.type === 'education' ? profile.theme.yellow : profile.theme.paper,
                  borderColor: profile.theme.ink,
                  color: profile.theme.ink,
                }}
              >
                {item.type === 'education' ? (
                  <GraduationCap className="w-3.5 h-3.5" />
                ) : item.type === 'milestone' ? (
                  <Award className="w-3.5 h-3.5" />
                ) : (
                  <Briefcase className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Cartão de Conteúdo da Experiência */}
              <div
                className="p-5 sm:p-6 rounded-sm border transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: profile.theme.paper2,
                  borderColor: profile.theme.line,
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span
                    className="font-mono text-xs font-bold px-2 py-0.5 rounded-xs"
                    style={{
                      backgroundColor: profile.theme.paper,
                      color: profile.theme.red,
                      border: `1px solid ${profile.theme.line}`,
                    }}
                  >
                    <Calendar className="w-3 h-3 inline mr-1 -mt-0.5" />
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="font-mono text-[0.72rem] opacity-60 flex items-center gap-1" style={{ color: profile.theme.pencil }}>
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </span>
                  )}
                </div>

                <h4 className="font-caveat font-bold text-2xl m-0 leading-tight" style={{ color: profile.theme.ink }}>
                  {item.role}
                </h4>

                <div className="font-architects text-base font-medium mb-3" style={{ color: profile.theme.blue }}>
                  {item.organization}
                </div>

                <p className="font-roboto text-sm leading-relaxed m-0" style={{ color: profile.theme.pencil }}>
                  {item.description}
                </p>

                {/* Tags de Tecnologias da Experiência */}
                {item.skillsUsed && item.skillsUsed.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono text-[0.68rem] px-2 py-0.5 rounded-xs border"
                        style={{
                          backgroundColor: profile.theme.paper,
                          borderColor: profile.theme.ink,
                          color: profile.theme.ink,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};