import { projects } from './data';
import ShowcaseCard from './ShowcaseCard';
import './Showcase.css';

export default function Showcase() {
  return (
    <section id="showcase" className="showcase-section">
      <h2 className="section-title">Showcase</h2>
      <div className="showcase-grid">
        {projects.map((project) => (
          <ShowcaseCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
