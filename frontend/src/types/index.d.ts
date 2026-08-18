export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}