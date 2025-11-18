export interface TimelineItem {
  year: string
  title: string
  company: string
  description: string
  projects: string[]
  role: string
  technologies: string[]
}

export type CardPosition = 'above' | 'below' | 'right'
