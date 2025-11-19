import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

interface BlogPostData {
  id: string;
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

const blogPostsData: Record<string, BlogPostData> = {
  'building-scalable-react-apps': {
    id: '1',
    slug: 'building-scalable-react-apps',
    title: 'Building Scalable React Applications',
    date: '2024-11-15',
    readTime: '8 min read',
    tags: ['React', 'Architecture', 'Performance'],
    content: `
## Introduction

Building scalable React applications requires careful consideration of architecture, state management, and performance optimization from the very beginning.

## Key Principles

### 1. Component Architecture

Organize your components into a clear hierarchy:
- **Atoms**: Basic UI elements (buttons, inputs)
- **Molecules**: Simple component combinations
- **Organisms**: Complex UI sections
- **Templates**: Page layouts
- **Pages**: Complete views

### 2. State Management

Choose the right state management solution based on your needs:

\`\`\`javascript
// Using React Query for server state
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: fetchUsers
});

// Using Zustand for client state
const useStore = create((set) => ({
  theme: 'dark',
  setTheme: (theme) => set({ theme })
}));
\`\`\`

### 3. Performance Optimization

- Use React.memo for expensive components
- Implement code splitting with React.lazy
- Virtualize long lists with react-virtual
- Optimize re-renders with useMemo and useCallback

## Conclusion

Building scalable React applications is an iterative process. Start with solid foundations and refactor as your application grows.
    `,
  },
  'typescript-best-practices': {
    id: '2',
    slug: 'typescript-best-practices',
    title: 'TypeScript Best Practices in 2024',
    date: '2024-10-28',
    readTime: '6 min read',
    tags: ['TypeScript', 'JavaScript', 'Best Practices'],
    content: `
## Introduction

TypeScript has become essential for modern web development. Here are the best practices you should follow in 2024.

## Type Safety

### Use Strict Mode

Always enable strict mode in your tsconfig.json:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

### Prefer Interfaces Over Types

For object shapes, interfaces provide better error messages:

\`\`\`typescript
// Preferred
interface User {
  id: string;
  name: string;
  email: string;
}

// Use types for unions and intersections
type Status = 'active' | 'inactive' | 'pending';
\`\`\`

## Utility Types

Make use of TypeScript's built-in utility types:

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

// Omit sensitive fields
type PublicUser = Omit<User, 'password'>;

// Make all fields optional
type PartialUser = Partial<User>;
\`\`\`

## Conclusion

Following these practices will help you write more maintainable and type-safe code.
    `,
  },
  'modern-css-techniques': {
    id: '3',
    slug: 'modern-css-techniques',
    title: 'Modern CSS Techniques You Should Know',
    date: '2024-10-10',
    readTime: '5 min read',
    tags: ['CSS', 'Frontend', 'Web Design'],
    content: `
## Introduction

CSS has evolved significantly. Here are modern techniques every frontend developer should know.

## CSS Custom Properties

Use CSS variables for theming:

\`\`\`css
:root {
  --primary-color: #00d4ff;
  --bg-color: #0a0e17;
  --text-color: #e0e0e0;
}

.button {
  background: var(--primary-color);
  color: var(--text-color);
}
\`\`\`

## CSS Grid

Create complex layouts with ease:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`

## Container Queries

Style based on container size instead of viewport:

\`\`\`css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
  }
}
\`\`\`

## Conclusion

Modern CSS provides powerful tools for creating responsive and maintainable designs.
    `,
  },
  'api-design-principles': {
    id: '4',
    slug: 'api-design-principles',
    title: 'RESTful API Design Principles',
    date: '2024-09-20',
    readTime: '10 min read',
    tags: ['API', 'Backend', 'REST'],
    content: `
## Introduction

Well-designed APIs are essential for building maintainable applications. Here are key principles for RESTful API design.

## Resource Naming

Use nouns for resources and plural forms:

\`\`\`
GET    /api/users          # Get all users
GET    /api/users/123      # Get user 123
POST   /api/users          # Create user
PUT    /api/users/123      # Update user 123
DELETE /api/users/123      # Delete user 123
\`\`\`

## HTTP Status Codes

Use appropriate status codes:

- **200 OK**: Successful request
- **201 Created**: Resource created
- **400 Bad Request**: Client error
- **401 Unauthorized**: Authentication required
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Server error

## Pagination

Always paginate large collections:

\`\`\`json
{
  "data": [...],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
\`\`\`

## Versioning

Version your APIs:

\`\`\`
/api/v1/users
/api/v2/users
\`\`\`

## Conclusion

Following these principles will help you create APIs that are easy to use and maintain.
    `,
  },
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? blogPostsData[slug] : null;

  if (!post) {
    return (
      <div className="blog-post-page">
        <div className="blog-post-container">
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/#blog" className="back-link">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const renderContent = (content: string) => {
    const lines = content.trim().split('\n');
    const elements: JSX.Element[] = [];
    let inCodeBlock = false;
    let codeContent = '';
    let codeLanguage = '';

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="code-block">
              <code className={`language-${codeLanguage}`}>
                {codeContent.trim()}
              </code>
            </pre>
          );
          codeContent = '';
          inCodeBlock = false;
        } else {
          codeLanguage = line.slice(3) || 'text';
          inCodeBlock = true;
        }
      } else if (inCodeBlock) {
        codeContent += line + '\n';
      } else if (line.startsWith('## ')) {
        elements.push(<h2 key={index}>{line.slice(3)}</h2>);
      } else if (line.startsWith('### ')) {
        elements.push(<h3 key={index}>{line.slice(4)}</h3>);
      } else if (line.startsWith('- ')) {
        elements.push(<li key={index}>{line.slice(2)}</li>);
      } else if (line.trim()) {
        elements.push(<p key={index}>{line}</p>);
      }
    });

    return elements;
  };

  return (
    <div className="blog-post-page">
      <div className="blog-post-container">
        <Link to="/#blog" className="back-link">
          ← Back to Blog
        </Link>

        <header className="blog-post-header">
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <div className="blog-post-tags">
            {post.tags.map((tag) => (
              <span key={tag} className="blog-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <article className="blog-post-content">
          {renderContent(post.content)}
        </article>

        <footer className="blog-post-footer">
          <Link to="/#blog" className="back-link">
            ← Back to Blog
          </Link>
        </footer>
      </div>
    </div>
  );
}
