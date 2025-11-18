import { blogPosts } from './data'
import BlogCard from './BlogCard'
import './Blog.css'

export default function Blog() {
  return (
    <section id="blog" className="blog-section">
      <h2 className="section-title">Blog</h2>
      <div className="blog-grid">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}
