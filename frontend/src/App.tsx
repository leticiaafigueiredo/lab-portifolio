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
            <div className="logo" style={{ fontFamily: 'Caveat, cursive', fontSize: '2rem', fontWeight: 700 }}>
              {theme.name}
            </div>
            <ul className="nav-links" style={{ display: 'flex', gap: '28px', listStyle: 'none', margin: 0, padding: 0, fontFamily: 'Space Mono, monospace', fontSize: '0.82rem' }}>
              <li><a href="#sobre" style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px', color: 'inherit' }}>sobre</a></li>
              <li><a href="#trabalhos" style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px', color: 'inherit' }}>trabalhos</a></li>
              <li><a href="#habilidades" style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px', color: 'inherit' }}>habilidades</a></li>
              <li><a href="#contato" style={{ textDecoration: 'none', position: 'relative', paddingBottom: '4px', color: 'inherit' }}>contato</a></li>
            </ul>
          </nav>

          {/* HERO */}
          <section ref={heroRef} className="hero" style={{ padding: '56px 0 90px', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', alignItems: 'center' }}>
            <div>
              <span className="eyebrow hero-tag sketchy" style={{ display: 'inline-block', padding: '6px 14px', marginBottom: '18px', fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.pencil }}>
                {theme.tag}
              </span>
              <h1 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '5rem', marginBottom: '6px' }}>
                Oi, eu sou<br />
                <span className="circled" style={{ position: 'relative', display: 'inline-block', padding: '0 6px' }}>
                  {theme.name}
                  <svg viewBox="0 0 200 90" fill="none" style={{ position: 'absolute', inset: '-14px -10px', width: 'calc(100% + 20px)', height: 'calc(100% + 28px)', zIndex: -1 }}>
                    <path d="M15 45 C 10 15, 60 5, 100 8 C 150 11, 195 20, 190 45 C 186 72, 130 85, 90 82 C 45 79, 8 68, 15 45 Z" stroke={theme.yellow} strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
              <p className="hero-role" style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '1.35rem', color: theme.blue, marginTop: '6px' }}>
                {theme.role}
              </p>
              <p className="desc" style={{ maxWidth: '46ch', marginTop: '20px', color: theme.pencil }}>
                {theme.bio}
              </p>
              <div className="hero-cta" style={{ marginTop: '30px', display: 'flex', gap: '18px', alignItems: 'center' }}>
                <a href="#trabalhos" className="btn sketchy" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', background: theme.ink, color: theme.paper, border: 'none', padding: '14px 24px', cursor: 'pointer', position: 'relative', textDecoration: 'none', display: 'inline-block' }}>
                  ver trabalhos →
                </a>
                <a href="#contato" className="btn outline sketchy" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.85rem', background: 'transparent', color: theme.ink, border: 'none', padding: '12px 22px', cursor: 'pointer', position: 'relative', textDecoration: 'none', display: 'inline-block' }}>
                  bater um papo
                </a>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
              <div className="portrait-frame" style={{ position: 'relative', width: '100%', aspectRatio: '1/1.05', transform: 'rotate(-1.5deg)' }}>
                <div className="tape" style={{ position: 'absolute', width: '70px', height: '26px', background: theme.yellow, top: '-14px', left: '50%', transform: 'translateX(-50%) rotate(-3deg)', boxShadow: '0 1px 2px rgba(0,0,0,0.15)', opacity: 0.6 }}></div>
                <svg className="face" viewBox="0 0 200 210" fill="none" style={{ position: 'absolute', inset: '14px', width: 'calc(100% - 28px)', height: 'calc(100% - 28px)' }}>
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
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  background: theme.yellow,
                  color: '#221F1B',
                  border: '2px solid #221F1B',
                  padding: '10px 18px',
                  cursor: 'pointer',
                  borderRadius: '3px 14px 4px 12px/12px 4px 14px 3px',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.1)',
                  marginTop: '8px'
                }}
              >
                🔄 Trocar para {targetName}
              </button>
            </div>
          </section>

          {/* SOBRE */}
          <section className="section" id="sobre" style={{ padding: '70px 0', borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '44px' }}>
              <span className="num" style={{ fontFamily: 'Space Mono, monospace', color: theme.pencil, fontSize: '0.9rem' }}>01</span>
              <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '2.8rem' }}>minha trajetória</h2>
            </div>
            <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }}>
              <div className="index-card sketchy" style={{ padding: '26px 26px 30px', position: 'relative', background: theme.paper2, transform: 'rotate(0.8deg)' }}>
                <span className="eyebrow" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: theme.pencil }}>nota pessoal</span>
                <p style={{ marginTop: '14px', color: theme.pencil }}>Comecei escrevendo scripts para automatizar tarefas e nunca parei. Hoje ajudo times a transformar ideias soltas em software robusto e estruturado.</p>
                <p style={{ marginTop: '14px', color: theme.pencil }}>Café, terminal aberto e foco em eficiência são fundamentais no dia a dia.</p>
              </div>
              <div className="margin-notes" style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                <div className="note" style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '1.05rem', color: theme.ink, position: 'relative', paddingLeft: '34px' }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 0, top: '2px', width: '24px', height: '24px' }}><path d="M4 12 C 4 4, 20 4, 20 12 C 20 20, 4 20, 4 12 Z" stroke={theme.blue} strokeWidth="2" /></svg>foco em código limpo e arquitetura
                </div>
                <div className="note" style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '1.05rem', color: theme.ink, position: 'relative', paddingLeft: '34px' }}>
                  <svg viewBox="0 0 24 24" fill="none" style={{ position: 'absolute', left: 0, top: '2px', width: '24px', height: '24px' }}><path d="M4 12 C 4 4, 20 4, 20 12 C 20 20, 4 20, 4 12 Z" stroke={theme.blue} strokeWidth="2" /></svg>+40 projetos e entregas estruturadas
                </div>
              </div>
            </div>
          </section>

          {/* PROJETOS */}
          <section className="section" id="trabalhos" style={{ padding: '70px 0', borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '44px' }}>
              <span className="num" style={{ fontFamily: 'Space Mono, monospace', color: theme.pencil, fontSize: '0.9rem' }}>02</span>
              <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '2.8rem' }}>trabalhos recentes</h2>
            </div>
            <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '36px' }}>
              {PROJECTS.map((project, index) => (
                <div 
                  key={project.id} 
                  className="project-card sketchy" 
                  style={{ 
                    padding: '22px', 
                    position: 'relative', 
                    transform: index === 0 ? 'rotate(-1.2deg)' : index === 1 ? 'rotate(1deg)' : index === 2 ? 'rotate(0.6deg)' : 'rotate(-0.8deg)' 
                  }}
                >
                  <div className="pin" style={{ position: 'absolute', top: '-9px', left: '24px', width: '16px', height: '16px', borderRadius: '50%', background: theme.red, boxShadow: '0 2px 3px rgba(0,0,0,0.25)' }}></div>
                  <div className="thumb sketchy" style={{ height: '150px', marginBottom: '16px', position: 'relative', overflow: 'hidden', background: theme.paper2 }}></div>
                  <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '1.9rem' }}>{project.title}</h3>
                  <p style={{ color: theme.pencil, fontSize: '0.94rem', margin: '8px 0 14px' }}>{project.description}</p>
                  <div className="tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {project.tags.map((tag, tIndex) => (
                      <span key={tIndex} className="tag" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.7rem', padding: '4px 9px', border: `1.5px solid ${theme.ink}`, borderRadius: '2px 8px 2px 8px', color: theme.ink }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HABILIDADES */}
          <section className="section" id="habilidades" style={{ padding: '70px 0', borderTop: `2px dashed ${theme.line}` }}>
            <div className="section-head" style={{ display: 'flex', alignItems: 'baseline', gap: '16px', marginBottom: '44px' }}>
              <span className="num" style={{ fontFamily: 'Space Mono, monospace', color: theme.pencil, fontSize: '0.9rem' }}>03</span>
              <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '2.8rem' }}>ferramentas & stacks</h2>
            </div>
            <div className="skills-wrap" style={{ display: 'flex', flexWrap: 'wrap', gap: '16px 22px' }}>
              {SKILLS.map((skill, index) => (
                <div key={index} className="skill" style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: '150px' }}>
                  <span className="skill-name" style={{ fontFamily: 'Architects Daughter, cursive', fontSize: '1.05rem' }}>{skill.name}</span>
                  <div className="skill-bar" style={{ position: 'relative', height: '14px' }}>
                    <div className="fill" style={{ position: 'absolute', top: '2px', bottom: '2px', left: '2px', background: theme.yellow, borderRadius: '1px 6px 1px 6px', width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CONTATO */}
          <section className="section" id="contato" style={{ padding: '70px 0', borderTop: `2px dashed ${theme.line}` }}>
            <div className="postcard sketchy" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', padding: 0, overflow: 'hidden', position: 'relative' }}>
              <div className="stamp" style={{ position: 'absolute', top: '20px', right: '20px', width: '64px', height: '76px', border: `2px dashed ${theme.pencil}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Space Mono, monospace', fontSize: '0.62rem', textAlign: 'center', color: theme.pencil, transform: 'rotate(4deg)' }}>
                commit<br />& café
              </div>
              <div className="postcard-left" style={{ padding: '44px', borderRight: `2px dashed ${theme.line}` }}>
                <h2 style={{ fontFamily: 'Caveat, cursive', fontWeight: 700, margin: 0, lineHeight: 1.05, fontSize: '2.6rem', marginBottom: '14px' }}>vamos construir<br />algo juntos?</h2>
                <p style={{ color: theme.pencil, maxWidth: '38ch' }}>Escreva contando sua ideia — respondemos em até 2 dias úteis.</p>
              </div>
              <div className="postcard-right" style={{ padding: '44px', display: 'flex', flexDirection: 'column', gap: '16px', justifyContent: 'center' }}>
                <a className="contact-line" href={`mailto:${theme.email}`} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>✉ {theme.email}</a>
                <a className="contact-line" href="#" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>✎ {theme.github}</a>
                <a className="contact-line" href="#" style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>✎ {theme.linkedin}</a>
                <a className="contact-line" href={`tel:${theme.phone}`} style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: 'inherit' }}>☎ {theme.phone}</a>
              </div>
            </div>
          </section>

          <footer style={{ textAlign: 'center', padding: '34px 0 50px', fontFamily: 'Space Mono, monospace', fontSize: '0.75rem', color: theme.pencil }}>
            feito à mão (e com muito café) © 2026 {theme.name}
          </footer>
        </div>
      </div>
    </>
  );
}