import { Project } from './types';

export const projects: Project[] = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'Task Management App',
    description:
      'Collaborative project management tool with real-time updates, Kanban boards, and team analytics.',
    tech: ['Vue.js', 'Firebase', 'Tailwind CSS', 'WebSocket'],
    link: 'https://example.com',
    github: 'https://github.com',
  },
  {
    title: 'AI Content Generator',
    description:
      'AI-powered content creation platform using GPT models for blog posts, marketing copy, and more.',
    tech: ['Next.js', 'Python', 'OpenAI', 'MongoDB'],
    link: 'https://example.com',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Interactive dashboard for visualizing business metrics with customizable widgets and reports.',
    tech: ['React', 'D3.js', 'GraphQL', 'ClickHouse'],
    github: 'https://github.com',
  },
];
