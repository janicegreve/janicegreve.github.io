import { useParams, Link } from 'react-router';
import { blogPosts } from '../utils/blogLoader';

export const PostDetails = () => {
  const { slug } = useParams();
  
  // Find the specific post based on the URL slug
  const post = blogPosts.find((p) => p.slug === slug);

  // Handle cases where the post doesn't exist (e.g., manual URL typing)
  if (!post) {
    return <div className="text-center py-20">Post not found.</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in-up">
      <Link to="/blog" className="text-indigo-600 hover:underline text-sm uppercase tracking-widest">
        ← Back to Blog
      </Link>
      
      <header className="mt-8 mb-12">
        <h1 className="text-4xl text-slate-900">{post.title}</h1>
        <p className="text-slate-400 mt-4">{post.date}</p>
        <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold">
          {post.tags?.join(", ") || 'Article'}
        </span>
      </header>

      {/* 
          DANGEROUSLY SET INNER HTML:
          This renders the 'post.content' string as actual HTML.
          We use Tailwind's 'prose' class to style the raw HTML tags automatically.
      */}
      <div 
        className="prose prose-lg md:prose-xl max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
    </article>
  );
}
