import { BlogPost } from './types'

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    excerpt: 'Learn the best practices for building large-scale React applications with proper architecture and state management.',
    date: '2024-11-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture', 'Performance'],
  },
  {
    id: '2',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices in 2024',
    excerpt: 'Essential TypeScript patterns and practices that will make your code more maintainable and type-safe.',
    date: '2024-10-28',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
  },
  {
    id: '3',
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    excerpt: 'Explore modern CSS features like Container Queries, CSS Grid, and CSS Custom Properties for better layouts.',
    date: '2024-10-10',
    readTime: '5 min read',
    tags: ['CSS', 'Frontend', 'Web Design'],
  },
  {
    id: '4',
    slug: 'api-design-principles',
    title: 'RESTful API Design Principles',
    excerpt: 'A comprehensive guide to designing clean, maintainable, and developer-friendly REST APIs.',
    date: '2024-09-20',
    readTime: '10 min read',
    tags: ['API', 'Backend', 'REST'],
  },
]
