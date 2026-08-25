export type ProfileId = 'murilo' | 'leticia';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
  architecture?: string;
  metrics?: { label: string; value: string }[];
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  experience?: string;
  iconName?: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  organization: string;
  location?: string;
  description: string;
  type: 'work' | 'education' | 'milestone';
  skillsUsed?: string[];
}

export interface ProfileTheme {
  paper: string;
  paper2: string;
  ink: string;
  pencil: string;
  red: string;
  blue: string;
  yellow: string;
  accent: string;
  line: string;
  tape: string;
  badgeBg: string;
}

export interface ProfileData {
  id: ProfileId;
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  tag: string;
  status: string;
  avatarType: 'murilo' | 'leticia';
  bio: string;
  longBio: string[];
  stats: { value: string; label: string; note: string }[];
  highlights: string[];
  theme: ProfileTheme;
  contact: {
    email: string;
    phone: string;
    github: string;
    githubUrl: string;
    linkedin: string;
    linkedinUrl: string;
    location: string;
    availability: string;
    whatsappUrl: string;
  };
  projectCategories: string[];
  projects: Project[];
  skillsCategories: SkillCategory[];
  timeline: ExperienceItem[];
}
