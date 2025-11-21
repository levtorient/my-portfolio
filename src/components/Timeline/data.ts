import { TimelineItem } from './types';

export const timelineData: TimelineItem[] = [
  {
    year: '2019',
    title: 'Fullstack Engineer',
    company: 'Orient Software',
    description:
      'Implementing features on fintech systems using microservices and event-driven architecture. Designing services based on DDD and CQRS patterns.',
    projects: ['Fintech Platform', 'Event-Driven Pipelines'],
    role: 'Fullstack Engineer',
    technologies: ['React', 'Angular', '.NET', 'Python', 'DynamoDB'],
  },
  {
    year: '2018',
    title: 'Middle Engineer',
    company: 'FPT Software',
    description:
      'Developed document verification logic using PHP, Python, and OpenCV to detect fake logos and signatures.',
    projects: ['Document Verification System'],
    role: 'Middle Engineer',
    technologies: ['PHP', 'Python', 'OpenCV'],
  },
  {
    year: '2017',
    title: 'Middle Engineer',
    company: 'FPT Software',
    description:
      'Refactored legacy .NET WPF application for latest Windows versions. Created tools to fix compilation issues and implemented unit tests.',
    projects: ['Paper Factory Management'],
    role: 'Middle Engineer',
    technologies: ['.NET', 'WPF', 'Unit Testing'],
  },
  {
    year: '2016',
    title: 'Junior Java Engineer',
    company: 'FPT Software',
    description:
      'Implemented custom Java Swing components for medical equipment management web application. Deployed system versions across global markets.',
    projects: ['Medical Equipment Management'],
    role: 'Junior Engineer',
    technologies: ['Java', 'Java Swing'],
  },
];
