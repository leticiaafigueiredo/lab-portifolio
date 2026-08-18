import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, SKILLS } from './data/portfolioData';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [currentUser, setCurrentUser] = useState<'murilo' | 'leticia'>('murilo');

  const toggleUser = () => {
    setCurrentUser((prev) => (prev === 'murilo' ? 'leticia' : 'murilo'));
  };

  const theme = currentUser === 'murilo' ? {
    paper: '#F6EFE1',
    paper2: '#EFE6D2',
    ink: '#221F1B',
    pencil: '#736A5C',
    red: '#E14B32',
    blue: '#33538E',
    yellow: '#F4C23D',
    line: 'rgba(34,31,27,0.16)',
    name: 'Murilo',
    role: 'desenvolvedor full-stack — escrevo código como quem rabisca uma ideia',
    tag: 'portfólio 2026',
    email: 'murilo@exemplo.com',
    github: 'github/murilo',
    linkedin: 'linkedin/murilo',
    phone: '+55 31 99999-9999',
    bio: 'Trabalho na fronteira entre lógica e produto: aplicações web, APIs e interfaces que resolvem problemas de verdade — mesmo que o design pareça ter saído de um caderno de anotações.',
  } : {
    paper: '#F0F4F8',
    paper2: '#D9E2EC',
    ink: '#102A43',
    pencil: '#486581',
    red: '#0077B6',
    blue: '#1992D4',
    yellow: '#38B2AC',
    line: 'rgba(16,42,67,0.16)',
    name: 'Leticia',
    role: 'engenharia de dados & arquitetura — organizando fluxos e pipelines',
    tag: 'portfólio 2026',
    email: 'leticia@exemplo.com',
    github: 'github/leticia',
    linkedin: 'linkedin/leticia',
    phone: '+55 31 88888-8888',
    bio: 'Focada em transformar grandes volumes de dados em estruturas eficientes e confiáveis, garantindo performance e clareza de ponta a ponta.',
  };

  const targetName = currentUser === 'murilo' ? 'Leticia' : 'Murilo';
  const heroRef = useRef<HTMLElement>(null);
  useScrollReveal(heroRef);

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id="roughen" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.5" />
        </filter>
      </svg>

      <div style={{ backgroundColor: theme.paper, backgroundImage: `radial-gradient(${theme.line} 1px, transparent 1px)`, backgroundSize: '6px 6px', color: theme.ink, minHeight: '100vh', transition: 'background-color 0.3s ease' }}>
        <div className="wrap" style={{ maxWidth: '980px', margin: '0 auto', padding: '0 28px' }}>
          
          <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '22px 0' }}>
            <div className="logo font-archivo text-3xl font-bold tracking-tight">
              {theme.name}.
            </div>
            <ul className="nav-links flex gap-7 list-none m-0 p-0 font-mono text-[0.82rem]">
              <li><a href="#sobre" className="no-underline relative pb-1 text-inherit hover:opacity-75 transition-opacity">sobre</a></li>
              <li><a href="#trabalhos" className="no-underline relative pb-1 text-inherit hover:opacity-75 transition-opacity">trabalhos</a></li>
              <li><a href="#habilidades" className="no-underline relative pb-1 text-inherit hover:opacity-75 transition-opacity">habilidades</a></li>
              <li><a href="#contato" className="no-underline relative pb-1 text-inherit hover:opacity-75 transition-opacity">contato</a></li>
            </ul>
          </nav>

          {/* HERO */}
          <section ref={heroRef} className="hero py-14 pb-[90px] grid grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <div>
              <span className="eyebrow hero-tag sketchy inline-block px-3.5 py-1.5 mb-[18px] font-mono text-[0.72rem] tracking-[0.12em] uppercase" style={{ color: theme.pencil }}>
                {theme.tag}
              </span>
              <h1 className="font-caveat font-bold m-0 leading-[1.05] text-[5rem] mb-1.5">
                Oi, eu sou<br />
                <span className="circled relative inline-block px-1.5">
                  {theme.name}
                  <svg viewBox="0 0 200 90" fill="none" style={{ position: 'absolute', inset: '-14px -10px', width: 'calc(100% + 20px)', height: 'calc(100% + 28px)', zIndex: -1 }}>
                    <path d="M15 45 C 10 15, 60 5, 100 8 C 150 11, 195 20, 190 45 C 186 72, 130 85, 90 82 C 45 79, 8 68, 15 45 Z" stroke={theme.yellow} strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="hero-role font-architects text-[1.35rem] mt-1.5" style={{ color: theme.blue }}>
                {theme.role}
              </p>
              <p className="desc font-roboto max-w-[46ch] mt-5 text-sm md:text-base leading-relaxed" style={{ color: theme.pencil }}>
                {theme.bio}
              </p>
              <div className="hero-cta mt-[30px] flex gap-[18px] items-center">
                <a href="#trabalhos" className="btn sketchy font-mono text-[0.85rem] border-none px-6 py-3.5 cursor-pointer relative no-underline inline-block" style={{ background: theme.ink, color: theme.paper }}>
                  ver trabalhos →
                </a>
                <a href="#contato" className="btn outline sketchy font-mono text-[0.85rem] bg-transparent border-none px-[22px] py-3 cursor-pointer relative no-underline inline-block" style={{ color: theme.ink }}>
                  bater um papo
                </a>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="portrait-frame relative w-full aspect-[1/1.05] -rotate-2">
                <div className="tape absolute w-[70px] h-[26px] -top-[14px] left-1/2 -translate-x-1/2 -rotate-3 shadow-[0_1px_2px_rgba(0,0,0,0.15)] opacity-60" style={{ background: theme.yellow }}></div>
                <svg className="face absolute inset-3.5 w-[calc(100%-28px)] h-[calc(100%-28px)]" viewBox="0 0 200 210" fill="none">
                  <path d="M50 90 C 45 40, 150 40, 148 92 C 150 130, 140 165, 100 168 C 60 165, 48 130, 50 90 Z" stroke={theme.ink} strokeWidth="3" strokeLinecap="round" />
                  <path d="M68 92 Q 74 85, 82 92" stroke={theme.ink} strokeWidth="3" strokeLinecap="round" />
                  <path d="M118 92 Q 124 85, 132 92" stroke={theme.ink} strokeWidth="3" strokeLinecap="round" />
                  <path d="M80 122 Q 100 138, 120 122" stroke={theme.red} strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M40 60 C 55 15, 145 15, 160 60" stroke={theme.ink} strokeWidth="3" strokeLinecap="round" />
                  <path d="M30 178 C 60 195, 140 195, 170 178" stroke={theme.ink} strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Botão de alternância logo abaixo da foto */}
              <button
                onClick={toggleUser}
                className="font-mono text-xs font-bold px-4 py-2.5 cursor-pointer shadow-sm mt-2 transition-transform active:scale-95"
                style={{
                  background: theme.yellow,
                  color: '#221F1B',
                  border: '2px solid #221F1B',
                  borderRadius: '3px 14px 4px 12px/12px 4px 14px 3px',
                }}
              >
                Trocar para {targetName} 🔄
              </button>
            </div>
          </section>

          {/* SOBRE */}
          <section className="section py-[70px]" id="sobre" style={{ borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head flex items-baseline gap-4 mb-11">
              <span className="num font-mono text-sm" style={{ color: theme.pencil }}>01</span>
              <h2 className="font-caveat font-bold m-0 leading-[1.05] text-[2.8rem]">minha trajetória</h2>
            </div>
            <div className="about-grid grid grid-cols-2 gap-[50px] items-start">
              <div className="index-card sketchy p-[26px] relative rotate-[0.8deg]" style={{ background: theme.paper2 }}>
                <span className="eyebrow font-mono text-[0.72rem] tracking-[0.12em] uppercase" style={{ color: theme.pencil }}>nota pessoal</span>
                <p className="font-roboto mt-3.5 text-sm leading-relaxed" style={{ color: theme.pencil }}>Comecei escrevendo scripts para automatizar tarefas e nunca parei. Hoje ajudo times a transformar ideias soltas em software robusto e estruturado.</p>
                <p className="font-roboto mt-3.5 text-sm leading-relaxed" style={{ color: theme.pencil }}>Café, terminal aberto e foco em eficiência são fundamentais no dia a dia.</p>
              </div>
              <div className="margin-notes flex flex-col gap-[22px]">
                <div className="note font-architects text-[1.05rem] relative pl-[34px]" style={{ color: theme.ink }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 0, top: '2px', width: '24px', height: '24px' }}><path d="M4 12 C 4 4, 20 4, 20 12 C 20 20, 4 20, 4 12 Z" stroke={theme.blue} strokeWidth="2" /></svg>foco em código limpo e arquitetura
                </div>
                <div className="note font-architects text-[1.05rem] relative pl-[34px]" style={{ color: theme.ink }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 0, top: '2px', width: '24px', height: '24px' }}><path d="M4 12 C 4 4, 20 4, 20 12 C 20 20, 4 20, 4 12 Z" stroke={theme.blue} strokeWidth="2" /></svg>+40 projetos e entregas estruturadas
                </div>
              </div>
            </div>
          </section>

          {/* PROJETOS */}
          <section className="section py-[70px]" id="trabalhos" style={{ borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head flex items-baseline gap-4 mb-11">
              <span className="num font-mono text-sm" style={{ color: theme.pencil }}>02</span>
              <h2 className="font-caveat font-bold m-0 leading-[1.05] text-[2.8rem]">trabalhos recentes</h2>
            </div>
            <div className="projects-grid grid grid-cols-2 gap-9">
              {PROJECTS.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card sketchy p-[22px] relative" 
                  style={{ 
                    transform: index === 0 ? 'rotate(-1.2deg)' : index === 1 ? 'rotate(1deg)' : index === 2 ? 'rotate(0.6deg)' : 'rotate(-0.8deg)' 
                  }}
                >
                  <div className="pin absolute -top-[9px] left-6 w-4 h-4 rounded-full shadow-[0_2px_3px_rgba(0,0,0,0.25)]" style={{ background: theme.red }}></div>
                  <div className="thumb sketchy h-[150px] mb-4 relative overflow-hidden" style={{ background: theme.paper2 }}></div>
                  <h3 className="font-caveat font-bold m-0 leading-[1.05] text-[1.9rem]">{project.title}</h3>
                  <p className="font-roboto text-[0.94rem] my-2 leading-relaxed" style={{ color: theme.pencil }}>{project.description}</p>
                  <div className="tags flex flex-wrap gap-2 mt-3">
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tag font-mono text-[0.7rem] px-2.5 py-1 rounded-[2px_8px_2px_8px]" style={{ border: `1.5px solid ${theme.ink}`, color: theme.ink }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HABILIDADES */}
          <section className="section py-[70px]" id="habilidades" style={{ borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head flex items-baseline gap-4 mb-11">
              <span className="num font-mono text-sm" style={{ color: theme.pencil }}>03</span>
              <h2 className="font-caveat font-bold m-0 leading-[1.05] text-[2.8rem]">ferramentas & stacks</h2>
            </div>
            <div className="skills-wrap flex flex-wrap gap-x-[22px] gap-y-4">
              {SKILLS.map((skill, index) => (
                <div key={index} className="skill flex flex-col gap-2 min-w-[150px]">
                  <span className="skill-name font-architects text-[1.05rem]">{skill.name}</span>
                  <div className="skill-bar relative h-3.5">
                    <div className="fill absolute top-0.5 bottom-0.5 left-0.5 rounded-[1px_6px_1px_6px]" style={{ background: theme.yellow, width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTATO */}
          <section className="section py-[70px]" id="contato" style={{ borderTop: `2px dashed ${theme.line}` }}>
            <div className="postcard sketchy grid grid-cols-[1.1fr_0.9fr] p-0 overflow-hidden relative">
              <div className="stamp absolute top-5 right-5 w-16 h-[76px] flex items-center justify-center font-mono text-[0.62rem] text-center rotate-4" style={{ border: `2px dashed ${theme.pencil}`, color: theme.pencil }}>
                commit<br />& café
              </div>
              <div className="postcard-left p-11" style={{ borderRight: `2px dashed ${theme.line}` }}>
                <h2 className="font-caveat font-bold m-0 leading-[1.05] text-[2.6rem] mb-3.5">vamos construir<br />algo juntos?</h2>
                <p className="font-roboto text-sm leading-relaxed max-w-[38ch]" style={{ color: theme.pencil }}>Escreva contando sua ideia — respondemos em até 2 dias úteis.</p>
              </div>
              <div className="postcard-right p-11 flex flex-col gap-4 justify-center">
                <a className="contact-line font-mono text-[0.9rem] flex items-center gap-2.5 no-underline text-inherit hover:opacity-75" href={`mailto:${theme.email}`}>✉ {theme.email}</a>
                <a className="contact-line font-mono text-[0.9rem] flex items-center gap-2.5 no-underline text-inherit hover:opacity-75" href="#">✎ {theme.github}</a>
                <a className="contact-line font-mono text-[0.9rem] flex items-center gap-2.5 no-underline text-inherit hover:opacity-75" href="#">✎ {theme.linkedin}</a>
                <a className="contact-line font-mono text-[0.9rem] flex items-center gap-2.5 no-underline text-inherit hover:opacity-75" href={`tel:${theme.phone}`}>☎ {theme.phone}</a>
              </div>
            </div>
          </section>

          <footer className="text-center pt-[34px] pb-[50px] font-mono text-xs" style={{ color: theme.pencil }}>
            feito à mão (e com muito café) © 2026 {theme.name}
          </footer>
        </div>
      </div>
    </>
  );
}