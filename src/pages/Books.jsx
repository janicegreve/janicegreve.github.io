import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { getBooks } from '../utils/bookLoader';
import { AalborgSign } from '../components/AalborgSign'

export const Books = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const books = getBooks(lang);

  return (
    <>
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-5xl mb-16 text-center">{t('books.title')}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {books.map(book => (
            <Link to={`/${lang}/books/${book.id}`} key={book.id} className="group">
              <div className="relative aspect-2/3 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:-translate-y-2">
                <img src={book.cover} alt={book.title} className="object-cover w-full h-full" />
              </div>
              <h2 className={`mt-6 text-2xl ${book.titleFont} text-slate-900`}>{book.title}</h2>
              <p className="text-slate-500 italic text-sm">{book.tagline}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-fit">
        <AalborgSign />
      </div>

      <div className={clsx(
        "bg-linear-to-br from-pink-200 to-pink-500",
        "mt-8 rounded-lg p-8 shadow-2xl",
        "flex flex-col items-center",
        )}>
        <img 
          src="/covers/ava-jones-3d.webp" 
          alt="Ava Jones: The End And The Beginning" 
          className="w-64 md:w-80 justify-center transition-transform duration-500 hover:scale-105"
        />
      </div>
    </>
  );
}
