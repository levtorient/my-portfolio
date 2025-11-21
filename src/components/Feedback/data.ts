import { FeedbackItem, DummyAvatar } from './types';

export const feedbackData: FeedbackItem[] = [
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    feedback:
      'Exceptional problem-solving skills and attention to detail. Always delivers high-quality work on time.',
    avatar: '👩‍💼',
    position: { left: 8, top: 25 },
  },
  {
    name: 'Michael Chen',
    role: 'Senior Developer',
    feedback:
      'Great team player with excellent technical skills. A pleasure to collaborate with on complex projects.',
    avatar: '👨‍💻',
    position: { left: 15, top: 85 },
  },
  {
    name: 'Emily Davis',
    role: 'UX Designer',
    feedback:
      'Understands design principles and always implements UI with pixel-perfect accuracy. Highly recommended!',
    avatar: '👩‍🎨',
    position: { left: 45, top: 48 },
  },
  {
    name: 'David Wilson',
    role: 'Tech Lead',
    feedback:
      'Strong leadership potential and excellent communication. Takes initiative and mentors junior developers.',
    avatar: '👨‍🔬',
    position: { left: 78, top: 22 },
  },
  {
    name: 'Lisa Anderson',
    role: 'DevOps Engineer',
    feedback:
      'Always considers scalability and performance. Their code is clean and well-documented.',
    avatar: '👩‍🔧',
    position: { left: 82, top: 82 },
  },
];

export const dummyAvatars: DummyAvatar[] = [
  { avatar: '👤', position: { left: 32, top: 15 } },
  { avatar: '👤', position: { left: 62, top: 38 } },
  { avatar: '👤', position: { left: 28, top: 70 } },
  { avatar: '👤', position: { left: 55, top: 78 } },
  { avatar: '👤', position: { left: 68, top: 62 } },
];

export const dummyTexts = [
  'Hi!',
  'Awesome!',
  'Thanks Levt!',
  'Great work!',
  'Nice!',
  'Cool!',
  'Amazing!',
  'Well done!',
  'Impressive!',
  'Bye!',
];
