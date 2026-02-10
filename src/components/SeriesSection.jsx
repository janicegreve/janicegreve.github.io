import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { getBooks } from '../utils/bookLoader';
import { getSeriesById } from '../utils/seriesLoader';
import { SeriesBanner } from './SeriesBanner';
import { BookTitle } from './BookTitle';

export const SeriesSection = ({ currentBook, seriesId }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  if (currentBook) {
    if (!currentBook.seriesId) return null;

    seriesId = currentBook.seriesId;
  }

  const books = getBooks(lang);
  const seriesBooks = currentBook
    ? books.filter(book => book.seriesId === currentBook.seriesId && book.id !== currentBook.id)
    : books.filter(book => book.seriesId === seriesId);

  const series = getSeriesById(lang, seriesId);

  return (
    <section className="mt-20 flex flex-col items-center">
      <div className="pb-4">
        <div className={clsx(
          "bg-linear-to-br from-pink-100 to-pink-300",
          "mt-4 rounded-lg p-8 shadow-2xl",
          "flex flex-col items-center",
        )}>
          <div className="max-w-2xl">
            <SeriesBanner series={series.id} />
          </div>

          <h3 className="text-xl text-center md:text-5xl mt-8 mb-8 drop-shadow-md uppercase">
            {series.title}
          </h3>
          {series.description.map((paragraph, index) => {
            return (
              <p
                key={index}
                className={`text-justify leading-7 md:leading-10 text-lg md:text-xl drop-shadow-sm ${index > 0 ? "indent-6" : ""}`}
                dangerouslySetInnerHTML={{ __html: paragraph }} 
              />
            );
          })}
        </div>
      </div>

      {seriesBooks.length > 0 && <h3 className="text-3xl text-slate-900 my-10 text-center">
        {t('seriesSection.more')}
      </h3>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {seriesBooks.map((book) => (
          <Link
            key={book.id}
            to={`/${lang}/books/${book.id}`}
            className="group block text-center"
          >
            <div className="relative aspect-2/3 overflow-hidden rounded-lg shadow-md transition-transform group-hover:-translate-y-2">
              <img 
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <BookTitle book={book} textClass='text-xs text-slate-900' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
