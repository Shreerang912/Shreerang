export interface Skill {
  id: string;
  label: string;
  category: 'design' | 'hardware' | 'android' | 'python' | 'web' | 'systems';
  level: number;
  tools: string[];
  description: string;
}

export const SKILLS: Skill[] = [
  {
    id: '3d-design',
    label: '3D Design',
    category: 'design',
    level: 85,
    tools: ['Fusion 360', 'T-splines', 'Parametric Modeling'],
    description: 'Designing functional parts and complex organic forms for 3D printing and manufacturing.',
  },
  {
    id: 'hardware',
    label: 'Hardware',
    category: 'hardware',
    level: 75,
    tools: ['Arduino', 'Raspberry Pi', 'PCB Design', 'Soldering'],
    description: 'Building physical prototypes, integrating sensors, and bridging the gap between code and the real world.',
  },
  {
    id: 'android',
    label: 'Android',
    category: 'android',
    level: 80,
    tools: ['Kotlin', 'Android Studio', 'Jetpack Compose'],
    description: 'Developing native mobile applications with a focus on performance and offline-first architecture.',
  },
  {
    id: 'python',
    label: 'Python',
    category: 'python',
    level: 90,
    tools: ['Pandas', 'Flask', 'Data Analysis', 'Automation'],
    description: 'Writing scripts for automation, data processing, and building backend APIs for hardware projects.',
  },
  {
    id: 'web',
    label: 'Web',
    category: 'web',
    level: 85,
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
    description: 'Building responsive, interactive web interfaces and dashboards for data visualization.',
  },
  {
    id: 'systems',
    label: 'Systems',
    category: 'systems',
    level: 70,
    tools: ['Linux', 'Git', 'Docker', 'Bash'],
    description: 'Managing development environments, version control, and basic deployment pipelines.',
  }
];
