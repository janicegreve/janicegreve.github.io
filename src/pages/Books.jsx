import { Fragment } from 'react';
import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Activity } from 'lucide-react';
import { getBooks } from '../utils/bookLoader';
import { BookTitle } from '../components/BookTitle';

const separatorColors = [
  "text-indigo-500",
  "text-amber-500",
  "text-emerald-500",
  "text-fuchsia-500"
];

export const Books = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const books = getBooks(lang);

  return (
    <>
      <div className="max-w-6xl mx-auto py-10 px-6">
        <h1 className="text-5xl mb-16 text-center">{t('books.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map((book, index) => (
            <Fragment key={book.id}>
              <Link to={`/${lang}/books/${book.id}`} className="group">
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
              {index < books.length - 1 &&
                <div className="md:hidden flex items-center justify-center my-4">
                  <div className={`mx-8 ${separatorColors[index % separatorColors.length]} scale-x-1000`}>
                    <Activity />
                  </div>
                </div>
              }
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
