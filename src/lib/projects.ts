export type ProjectCategory =
  | 'android'
  | 'python'
  | '3d-print'
  | 'cad'
  | 'hardware'
  | 'website';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  image?: string;
  links?: {
    source?: string;
    live?: string;
  };
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 'aero-telemetry',
    title: 'Aero Telemetry System',
    tagline: 'Real-time flight data visualization.',
    description: 'A hardware-software bridge that captures sensor data from experimental RC aircraft and visualizes it in a custom Python dashboard. Built to analyze flight dynamics and optimize control surfaces.',
    category: 'hardware',
    tech: ['Python', 'Arduino', 'C++', 'Serial Comm'],
    featured: true,
  },
  {
    id: 'cad-drone-frame',
    title: 'Modular Drone Frame',
    tagline: 'Parametric 3D printable quadcopter chassis.',
    description: 'Designed a lightweight, modular drone frame in Fusion 360. Iterated through 5 versions to optimize strength-to-weight ratio. Printed in PETG for impact resistance.',
    category: 'cad',
    tech: ['Fusion 360', 'PETG', '3D Printing', 'FEA'],
    featured: true,
  },
  {
    id: 'task-sync',
    title: 'TaskSync Android',
    tagline: 'Offline-first task management.',
    description: 'An Android application focused on speed and offline reliability. Uses Room database for local storage and syncs with a custom backend when connection is restored.',
    category: 'android',
    tech: ['Kotlin', 'Android SDK', 'Room', 'Coroutines'],
    featured: true,
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio V1',
    tagline: 'My previous personal website.',
    description: 'A static site built with plain HTML, CSS, and vanilla JavaScript. Served as a playground for learning CSS grid and basic animations.',
    category: 'website',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'python-scraper',
    title: 'Component Scraper',
    tagline: 'Automated electronic component pricing.',
    description: 'A Python script that scrapes multiple electronics distributors to find the best prices for BOMs (Bill of Materials). Exports data to CSV for easy analysis.',
    category: 'python',
    tech: ['Python', 'BeautifulSoup', 'Pandas'],
  },
  {
    id: 'hackclub-construct',
    title: 'Hack Club Construct',
    tagline: '3D printed mechanical models.',
    description: 'A series of mechanical models designed and printed as part of the Hack Club Construct initiative. Explores gear ratios, linkages, and kinetic movement.',
    category: '3d-print',
    tech: ['Fusion 360', 'PLA', 'PrusaSlicer'],
  }
];
