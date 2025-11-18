import { Link } from 'react-router-dom'
import { BlogPost } from './types'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <div className="blog-card-content">
        <div className="blog-meta">
          <span className="blog-date">{post.date}</span>
          <span className="blog-read-time">{post.readTime}</span>
        </div>
        <h3>{post.title}</h3>
        <p className="blog-excerpt">{post.excerpt}</p>
        <div className="blog-tags">
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
