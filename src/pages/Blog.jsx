import { Link } from 'react-router';
import { blogPosts } from '../utils/blogLoader';

export const Blog = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-fredoka mb-12">Author Blog</h1>
      <div className="space-y-12">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-12">
            <h2 className="text-2xl font-bold hover:text-indigo-600 transition-colors">
              <Link to={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-slate-400 text-sm mt-2">{post.date}</p>
            <p className="mt-4 text-slate-600">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
