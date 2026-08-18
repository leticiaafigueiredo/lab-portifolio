import type { Project, Skill } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Café Rabisco',
    description: 'Plataforma de e-commerce para torrefadora artesanal, com painel de estoque e checkout próprio.',
    tags: ['react', 'node.js'],
  },
  {
    id: '2',
    title: 'Trilha Urbana',
    description: 'App de mapas colaborativos com geolocalização em tempo real e sincronização offline-first.',
    tags: ['react native', 'graphql'],
  },
  {
    id: '3',
    title: 'Editora Semente',
    description: 'CMS headless e API de catálogo para uma editora de livros infantis, com deploy automatizado.',
    tags: ['typescript', 'postgresql'],
  },
  {
    id: '4',
    title: 'Feira Miúda',
    description: 'Sistema de inscrição e gestão de expositores para feira de artesanato local, com painel admin.',
    tags: ['next.js', 'docker'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', level: 92 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'Bancos de dados', level: 78 },
  { name: 'DevOps básico', level: 60 },
];