import { getBlogPosts } from '../utils/blogLoader';
import { useNavigate, useParams } from 'react-router';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Blog = () => {
  const navigate = useNavigate();
  const { lang } = useParams();
  const posts = getBlogPosts(lang);
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto py-6 px-6">
      <h1 className="text-5xl mb-12 text-center">
        {t('blog.title')}
      </h1>
      
      <div className="grid gap-8">
        {posts.map((post) => (
          <motion.article
            key={post.slug}
            // HOVER EFFECTS: Subtly scale up and change border color
            whileHover={{ y: -4, borderColor: "var(--color-indigo-200)" }}
            onClick={() => navigate(`/${lang}/blog/${post.slug}`)}
            className="
              group cursor-pointer p-8 
              bg-white border border-slate-100 rounded-2xl shadow-sm
              transition-colors hover:bg-slate-50/80
              relative flex flex-col space-y-4
            "
          >
            {/* Metadata Bar */}
            <div className="flex items-center justify-between">
              <p className="text-slate-400 text-sm">{post.date}</p>
              <span className="text-xs uppercase tracking-widest text-indigo-500 font-bold">
                {post.tags?.[0] || 'Article'}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl text-slate-900 group-hover:text-indigo-600 transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-slate-600 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>

            {/* "Read More" Hint */}
            <div className="pt-4 flex items-center text-indigo-600 font-bold text-sm uppercase tracking-widest">
              {t('blog.read')}
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
