export type ProjectCategory =
  | 'android'
  | 'python'
  | '3d-print'
  | 'cad'
  | 'hardware'
  | 'website'
  | 'software';

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
    construct?: string;
  };
  repo?: string;
  featured?: boolean;
  status?: 'in-progress' | 'completed';
  note?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'notesapp',
    title: 'NotesApp',
    tagline: 'Communication and Notes management',
    description: 'An Android communication application where users can send and receive messages and notes to each other. Features a structured notes management system where notes can be tagged with subject name and topic name. All previous notes are stored in a separate notes manager interface for organized retrieval.',
    category: 'android',
    tech: [
      'Kotlin',
      'Android SDK',
      'Firebase Authentication',
      'Firebase Firestore',
      'Firebase Realtime Database',
      'XML',
      'Material Design'
    ],
    featured: true,
    note: 'I will add a GitHub repository for this project.'
  },
  {
    id: 'portfolio-v1',
    title: 'Portfolio V1',
    tagline: 'My previous personal website.',
    description: 'My earlier personal website built to explore layout systems, responsive design, and animation basics. Used as a learning ground for structuring components and understanding front-end workflows.',
    category: 'website',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'hackclub-construct',
    title: 'Hack Club Construct',
    tagline: '3D printed mechanical models.',
    description: 'A collection of multiple CAD projects created for 3D printing as part of Hack Club Construct. Focused on flat-pack mechanical concepts, structural fitting, and iterative design in Fusion 360. Total work exceeds 40+ hours of CAD experimentation and printing.',
    category: '3d-print',
    tech: [
      'Fusion 360',
      'PLA',
      'OrcaSlicer',
      '3D Printing'
    ],
    links: {
      construct: 'https://construct.hackclub.com/dashboard/users/1854'
    }
  },
  {
    id: 'python-tools',
    title: 'Python Utility Tools',
    tagline: 'Small automation and workflow scripts',
    description: 'A collection of small Python tools built for experimentation, automation, and solving practical problems. Focused on improving workflow efficiency and learning system design patterns.',
    category: 'python',
    tech: [
      'Python',
      'CLI',
      'File Handling',
      'Automation'
    ]
  },
  {
    id: 'cad-experiments',
    title: 'CAD Form Experiments',
    tagline: 'Exploring T-splines and parametric modeling',
    description: 'A set of experimental models created in Fusion 360 to explore form modeling, surface smoothing, and structural iteration. Focused on understanding geometry control and design constraints.',
    category: 'cad',
    tech: [
      'Fusion 360',
      'T-Splines',
      'Parametric Design',
      'Iteration'
    ]
  },
  {
    id: 'ai-object-identifier',
    title: 'AI Powered Object Identifier',
    tagline: 'ESP32-CAM based real-time object detection',
    description: 'An ESP32-CAM based AI system capable of performing real-time object detection. Uses embedded processing to identify objects from camera feed and classify them. Focused on edge AI deployment and hardware-software integration.',
    category: 'hardware',
    tech: [
      'ESP32-CAM',
      'Arduino Framework',
      'Embedded C++',
      'Computer Vision',
      'Edge AI'
    ],
    repo: 'https://github.com/Shreerang912/AI-Powered-Object-Detection-with-Esp32-Cam',
    featured: true
  },
  {
    id: 'treeify',
    title: 'Treeify',
    tagline: 'Structured hierarchical note visualization tool',
    description: 'A structured tool for visualizing and organizing content in a hierarchical tree format. Built to improve clarity when managing structured information and nested relationships.',
    category: 'software',
    tech: [
      'JavaScript',
      'Frontend Development',
      'Data Structures',
      'UI Architecture'
    ],
    repo: 'https://github.com/Shreerang912/Treeify'
  },
  {
    id: 'matrix-keyboard',
    title: '5x5 Matrix Keyboard',
    tagline: 'Custom programmable ESP32 input device',
    description: 'A custom-built 5x5 matrix keyboard powered by ESP32. Designed to explore input matrix scanning, firmware logic, and custom hardware layout design. Currently in development.',
    category: 'hardware',
    tech: [
      'ESP32',
      'Matrix Scanning',
      'Embedded C++',
      'Circuit Design'
    ],
    status: 'in-progress'
  },
  {
    id: 'esp32-tv-remote',
    title: 'Samsung Smart TV Remote',
    tagline: 'Custom ESP32-based smart remote system',
    description: 'A custom smart remote system built using ESP32 to control a Samsung Smart TV. Focused on IR/WiFi communication, signal mapping, and embedded control logic.',
    category: 'hardware',
    tech: [
      'ESP32',
      'IR Communication',
      'Embedded Systems',
      'Signal Processing'
    ]
  },
  {
    id: 'esp32-smartwatch',
    title: 'ESP32 Smart Watch',
    tagline: 'Custom wearable system prototype',
    description: 'A wearable smart watch prototype powered by ESP32. Focused on embedded display integration, power optimization, and compact hardware design. Currently in development.',
    category: 'hardware',
    tech: [
      'ESP32',
      'Embedded Systems',
      'Display Modules',
      'Power Management'
    ],
    status: 'in-progress'
  }
];
