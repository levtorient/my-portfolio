export interface NavItem {
  id: string
  label: string
  icon: string
}

export const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'feedback', label: 'Feedback', icon: '💬' },
  { id: 'blog', label: 'Blog', icon: '📝' },
  { id: 'showcase', label: 'Showcase', icon: '🚀' },
]
