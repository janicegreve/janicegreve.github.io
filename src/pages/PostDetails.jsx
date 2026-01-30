import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { getBlogPosts } from '../utils/blogLoader';

export const PostDetails = () => {
  const { lang, slug } = useParams();
  const { t } = useTranslation();

  // Find the specific post based on the URL slug
  const post = getBlogPosts(lang).find((p) => p.slug === slug);

  // Handle cases where the post doesn't exist (e.g., manual URL typing)
  if (!post) {
    return <div className="text-center py-20">{t('blog-details.not-found')}</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-6 animate-fade-in-up">
      <Link to={`/${lang}/blog`} className="text-indigo-600 hover:underline text-sm uppercase tracking-widest">
        ← {t('blog-details.back')}
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
