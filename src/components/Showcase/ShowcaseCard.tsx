import { Project } from './types';

interface ShowcaseCardProps {
  project: Project;
}

export default function ShowcaseCard({ project }: ShowcaseCardProps) {
  return (
    <div className="showcase-card">
      <div className="showcase-background">
        <div className="showcase-gradient"></div>
      </div>
      <div className="showcase-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="showcase-tech">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="showcase-links">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-link"
            >
              View Project →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="showcase-link github"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
