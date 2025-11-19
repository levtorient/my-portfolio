import { TimelineItem, CardPosition } from './types';

interface TimelineCardProps {
  item: TimelineItem;
  position: CardPosition;
}

export default function TimelineCard({ item, position }: TimelineCardProps) {
  return (
    <div className={`timeline-card ${position}`}>
      <div className="card-connector"></div>
      <h3>{item.title}</h3>
      <p className="company">{item.company}</p>
      <p className="description">{item.description}</p>

      <div className="card-section">
        <h4>Projects</h4>
        <ul>
          {item.projects.map((project) => (
            <li key={project}>{project}</li>
          ))}
        </ul>
      </div>

      <div className="card-section">
        <h4>Role</h4>
        <p>{item.role}</p>
      </div>

      <div className="tech-tags">
        {item.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
