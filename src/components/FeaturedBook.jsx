import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import { getBookById, getReviews } from '../utils/bookLoader';
import { BookTitle } from './BookTitle';

export const FeaturedBook = ({ bookId }) => {
  const { t } = useTranslation();
  const { lang } = useParams();

  const book = getBookById(lang, bookId);

  if (!book) return (null);

  return (
    <Link to={`/${lang}/books/${book.id}`} key={book.id} className="group">
      <section className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto px-6">

        {/* LEFT: The Book Cover with a subtle Shadow/Lift */}
        <div className="flex justify-center md:justify-end group-hover:animate-fade-in-up">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img 
              src={book.cover}
              alt={book.title}
              className="w-64 md:w-80 rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        </div>

        {/* RIGHT: Details & Social Proof */}
        <div className="flex flex-col space-y-6 text-center md:text-left">
          <div>
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">{t('featuredBook.latest')}</span>
            <div className="mt-2">
              <BookTitle book={book} textClass='text-xl text-slate-900' />
            </div>
            <p className="text-xl text-slate-600 mt-4 leading-relaxed font-light italic">
              {book.tagline}
            </p>
          </div>

          {/* Quoted Reviews */}
          <div className="space-y-4 border-l-2 border-indigo-100 pl-6 italic text-slate-500">
            {getReviews(lang, book).slice(0, 3).map((review, index) => (
              <p key={`${lang}-${index}`} className="text-sm">"{review.text}" — <span className="font-bold">{review.critic}</span></p>
            ))}
          </div>

          {/* Call to Action */}
          <div className="pt-2 flex-row items-center text-indigo-600 font-bold text-sm uppercase tracking-widest">
            {t('books.read')}
            <span className="ml-2 transition-transform duration-500 group-hover:pl-1">→</span>
          </div>
        </div>

      </section>
    </Link>
  );
}
