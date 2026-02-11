import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { getBooks } from '../utils/bookLoader';
import { BookTitle } from '../components/BookTitle';

export const Books = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const books = getBooks(lang);

  return (
    <>
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-5xl mb-16 text-center">{t('books.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map(book => (
            <Link to={`/${lang}/books/${book.id}`} key={book.id} className="group">
              <div className="relative overflow-hidden rounded-xl shadow-lg transition-transform group-hover:-translate-y-2">
                <img src={book.cover} alt={book.title} className="object-cover w-full h-full" />
              </div>
              <div className="mt-6">
                <BookTitle book={book} textClass='text-2xl text-slate-900' />
              </div>
              <p className="text-slate-500 italic text-sm mt-3">{book.tagline}</p>

              <div className="pt-2 flex items-center text-indigo-600 font-bold text-sm uppercase tracking-widest">
                {t('books.read')}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
