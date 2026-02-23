import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { getBookById } from '../utils/bookLoader';
import { BuyLinks } from '../components/BuyLinks';
import { SeriesSection } from '../components/SeriesSection';
import { BookTitle } from '../components/BookTitle';
import { PublicationDetails } from './PublicationDetails';
import { DynamicIcon } from '../components/DynamicIcon';

export const BookDetails = () => {
  const { lang, id } = useParams();
  const { t } = useTranslation();
  const book = getBookById(lang, id);

  if (!book) return <div className="py-20 text-center">{t('bookDetails.notFound')}</div>;

  return (
    <article className="max-w-6xl mx-auto py-12 px-6 animate-fade-in-up">
      {/* Back button */}
      <Link to={`/${lang}/books`} className="text-indigo-600 text-sm uppercase tracking-widest">
        ← {t('nav.books')}
      </Link>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* LEFT: Large 3D Mockup Cover */}
        <div className="relative md:col-span-5 group">
          <img src={book.cover3d} alt={book.title} className="w-full" />
          <div className={clsx(
            "absolute -top-8 left-4 md:-top-4 z-0 opacity-100 sm:opacity-0",
            "group-hover:opacity-100 group-hover:scale-125 transition-all duration-500",
          )}>
            <DynamicIcon
              name={book.icon}
              color={book.iconColor}
              className="w-16 h-16 md:w-12 md:h-12 drop-shadow-[4px_4px_3px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>

        {/* RIGHT: Localized Content & Buy Links */}
        <div className="md:col-span-7 space-y-8">
          <header>
            <BookTitle book={book} textClass='text-xl md:text-3xl text-slate-900' />
            <p className="text-xl italic text-slate-600 mt-4">{book.tagline}</p>
          </header>

          <div className="max-w-none">
            {book.description.map((paragraph, index) => {
              return (
                <p
                  key={index}
                  className={`text-justify ${index > 0 ? "indent-6" : ""}`}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              );
            })}
          </div>

          <PublicationDetails book={book} />

          {/* DYNAMIC BUY LINKS */}
          {Object.keys(book.links).length > 0 &&
            <div className="flex flex-wrap gap-4">
              <BuyLinks links={book.links} />
            </div>
          }
        </div>
      </div>

      <SeriesSection currentBook={book} />
    </article>
  );
}
