import { Project, Skill } from '../types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Café Rabisco',
    description: 'Identidade visual e embalagens para torrefadora artesanal, inspirada em cadernos de campo de baristas.',
    tags: ['branding', 'packaging'],
  },
  {
    id: '2',
    title: 'Trilha Urbana',
    description: 'App de mapas colaborativos com ilustrações manuais e microinterações desenhadas à mão.',
    tags: ['ui/ux', 'ilustração'],
  },
  {
    id: '3',
    title: 'Editora Semente',
    description: 'Capas de livros infantis e sistema de tipografia manuscrita para uma coleção de contos.',
    tags: ['editorial', 'lettering'],
  },
  {
    id: '4',
    title: 'Feira Miúda',
    description: 'Sinalização e material gráfico para feira de artesanato local, tudo desenhado à nanquim.',
    tags: ['sinalização', 'print'],
  },
];

export const SKILLS: Skill[] = [
  { name: 'Ilustração', level: 92 },
  { name: 'Branding', level: 85 },
  { name: 'UI/UX', level: 75 },
  { name: 'Lettering', level: 88 },
  { name: 'Motion simples', level: 60 },
];