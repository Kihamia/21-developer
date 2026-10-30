export interface Project {
  title: string
  description: string
  tags: string[]
  year: number
  href: string
}

export interface Experience {
  role: string
  company: string
  period: string
  summary: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface Profile {
  name: string
  role: string
  location: string
  email: string
  intro: string
  about: string[]
  skills: string[]
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Alex Morgan',
  role: 'Frontend Engineer',
  location: 'Lisbon, Portugal',
  email: 'hello@alexmorgan.dev',
  intro:
    'I build fast, accessible, and thoughtfully crafted interfaces for the web — with a soft spot for type-safe code and small details.',
  about: [
    'For the past six years I have worked with product teams to turn rough ideas into polished software. I care about the space where design and engineering meet: motion that feels natural, layouts that hold up on any screen, and code that the next person can read.',
    'Outside of work you can find me contributing to open source, writing about TypeScript patterns, or hunting for the best pastel de nata in town.',
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Testing Library',
    'Accessibility',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'X / Twitter', href: 'https://x.com' },
  ],
}

export const projects: Project[] = [
  {
    title: 'Ledgerly',
    description:
      'A personal finance dashboard with real-time budgets, recurring transaction detection, and exportable reports.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    year: 2026,
    href: '#',
  },
  {
    title: 'Typewise',
    description:
      'An open-source library of strongly typed form utilities with 2k+ stars, used by teams to cut validation boilerplate.',
    tags: ['TypeScript', 'Open Source'],
    year: 2025,
    href: '#',
  },
  {
    title: 'Fieldnotes',
    description:
      'A minimal, offline-first note-taking app with markdown support, tagging, and instant full-text search.',
    tags: ['React', 'IndexedDB', 'PWA'],
    year: 2025,
    href: '#',
  },
  {
    title: 'Transit Pulse',
    description:
      'A live map visualizing city transit delays, built for a civic hackathon and later adopted by a local council.',
    tags: ['React', 'Mapbox', 'Node.js'],
    year: 2024,
    href: '#',
  },
]

export const experience: Experience[] = [
  {
    role: 'Senior Frontend Engineer',
    company: 'Northwind Labs',
    period: '2023 — Present',
    summary:
      'Lead the design system and frontend architecture for a B2B analytics platform used by 40k+ people.',
  },
  {
    role: 'Frontend Engineer',
    company: 'Brightpath',
    period: '2021 — 2023',
    summary:
      'Shipped the customer onboarding flow end to end, improving activation by 18%.',
  },
  {
    role: 'Web Developer',
    company: 'Studio Kite',
    period: '2019 — 2021',
    summary:
      'Built marketing sites and e-commerce experiences for agency clients across Europe.',
  },
]
