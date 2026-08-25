import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowUpRight, Sparkles, Filter } from 'lucide-react';
import type { ProfileData, Project } from '../types';
import { GithubIcon } from './Icons';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { soundManager } from '../utils/soundEffects';

interface ProjectsProps {
  profile: ProfileData;
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ profile, onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef);

  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const filteredProjects = profile.projects.filter((project) => {
    if (activeCategory === 'Todos') return true;
    return project.category === activeCategory;
  });

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20"
      id="trabalhos"
      style={{ borderTop: `2px dashed ${profile.theme.line}` }}
    >
      {/* Cabeçalho da Seção */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8">
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm font-bold" style={{ color: profile.theme.pencil }}>
            02 //
          </span>
          <h2 className="font-caveat font-bold m-0 leading-tight text-4xl sm:text-5xl" style={{ color: profile.theme.ink }}>
            trabalhos & projetos
          </h2>
        </div>

        <span className="font-mono text-xs opacity-75" style={{ color: profile.theme.pencil }}>
          Mostrando {filteredProjects.length} de {profile.projects.length} registros
        </span>
      </div>

      {/* Barra de Filtros de Categoria */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-10 no-scrollbar">
        <Filter className="w-4 h-4 shrink-0 opacity-50 mr-1" style={{ color: profile.theme.ink }} />
        {profile.projectCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => {
                soundManager.playClick();
                setActiveCategory(category);
              }}
              className="sketchy px-3.5 py-1.5 font-mono text-xs font-bold cursor-pointer shrink-0 transition-all duration-200 active:scale-95"
              style={{
                backgroundColor: isActive ? profile.theme.ink : profile.theme.paper2,
                color: isActive ? profile.theme.paper : profile.theme.ink,
                border: `1.5px solid ${profile.theme.ink}`,
              }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grade de Cards de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => {
            // Rotações alternadas orgânicas
            const rotations = ['-rotate-1', 'rotate-1', 'rotate-0.5', '-rotate-0.5'];
            const rotClass = rotations[index % rotations.length];
            const pinColors = [profile.theme.red, profile.theme.blue, profile.theme.yellow];
            const pinColor = pinColors[index % pinColors.length];

            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`sketchy p-6 sm:p-7 relative transition-all duration-300 hover:rotate-0 hover:-translate-y-1.5 flex flex-col justify-between ${rotClass}`}
                style={{
                  backgroundColor: profile.theme.paper,
                  border: `2px solid ${profile.theme.ink}`,
                  boxShadow: '4px 6px 0px rgba(0,0,0,0.1)',
                }}
              >
                {/* Alfinete vermelho/azul no topo */}
                <div
                  className="pin absolute -top-2.5 left-6 w-4 h-4 rounded-full shadow-xs z-10"
                  style={{ backgroundColor: pinColor }}
                />

                <div>
                  {/* Cabeçalho do Card */}
                  <div className="flex items-center justify-between gap-2 mb-2 pt-1">
                    <span
                      className="font-mono text-[0.68rem] uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs"
                      style={{
                        backgroundColor: profile.theme.paper2,
                        color: profile.theme.pencil,
                        border: `1px solid ${profile.theme.line}`,
                      }}
                    >
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="font-mono text-[0.68rem] font-bold flex items-center gap-1" style={{ color: profile.theme.red }}>
                        <Sparkles className="w-3 h-3" /> Destaque
                      </span>
                    )}
                  </div>

                  {/* Título & Subtítulo */}
                  <h3 className="font-caveat font-bold text-3xl m-0 leading-tight" style={{ color: profile.theme.ink }}>
                    {project.title}
                  </h3>
                  <p className="font-architects text-sm mt-0.5 mb-3" style={{ color: profile.theme.blue }}>
                    {project.subtitle}
                  </p>

                  {/* Resumo do Projeto */}
                  <p className="font-roboto text-sm leading-relaxed mb-5" style={{ color: profile.theme.pencil }}>
                    {project.description}
                  </p>

                  {/* Métricas Resumidas (se houver) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4 p-2.5 rounded-xs border border-dashed" style={{ borderColor: profile.theme.line, backgroundColor: profile.theme.paper2 }}>
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="font-mono text-[0.7rem] flex items-center gap-1">
                          <span className="font-bold" style={{ color: profile.theme.red }}>{m.value}</span>
                          <span className="opacity-70" style={{ color: profile.theme.pencil }}>({m.label})</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags Técnicas */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag, tIndex) => (
                      <span
                        key={tIndex}
                        className="font-mono text-[0.68rem] px-2 py-0.5 rounded-xs border"
                        style={{
                          borderColor: profile.theme.ink,
                          color: profile.theme.ink,
                          backgroundColor: profile.theme.paper2,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Rodapé do Card com Botão de Ação */}
                <div className="pt-4 border-t border-dashed flex items-center justify-between gap-3" style={{ borderColor: profile.theme.line }}>
                  <button
                    onClick={() => {
                      soundManager.playPaperRustle();
                      onSelectProject(project);
                    }}
                    className="sketchy font-mono text-xs font-bold px-3.5 py-2 cursor-pointer transition-transform active:scale-95 flex items-center gap-1.5"
                    style={{
                      backgroundColor: profile.theme.yellow,
                      color: '#221F1B',
                      border: '1.5px solid #221F1B',
                    }}
                  >
                    <span>Ver detalhes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="p-1.5 rounded-sm hover:opacity-75 transition-opacity"
                        style={{ color: profile.theme.ink }}
                        title="Código no GitHub"
                      >
                        <GithubIcon size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => soundManager.playClick()}
                        className="p-1.5 rounded-sm hover:opacity-75 transition-opacity"
                        style={{ color: profile.theme.ink }}
                        title="Demonstração Online"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};