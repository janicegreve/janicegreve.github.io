import { useParams, Link } from 'react-router';
import { useTranslation } from 'react-i18next';
import { getBookById } from '../utils/bookLoader';
import { BuyLinks } from '../components/BuyLinks';
import { SeriesSection } from '../components/SeriesSection';

export const BookDetails = () => {
  const { lang, id } = useParams();
  const { t } = useTranslation();
  const book = getBookById(lang, id);

  if (!book) return <div className="py-20 text-center">{t('bookDetails.notFound')}</div>;

  return (
    <article className="max-w-6xl mx-auto py-12 px-6 animate-fade-in-up">
      {/* Back button */}
      <Link to={`/${lang}/books`} className="text-indigo-600 hover:underline text-sm uppercase tracking-widest">
        ← {t('nav.books')}
      </Link>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
        {/* LEFT: Large 3D Mockup Cover */}
        <div className="md:col-span-5">
          <img src={book.cover3d} alt={book.title} className="w-full" />
        </div>

        {/* RIGHT: Localized Content & Buy Links */}
        <div className="md:col-span-7 space-y-8">
          <header>
            <h1 className={`text-5xl ${book.titleFont} text-slate-900`}>{book.title}</h1>
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
            })
            }
          </div>

          {/* DYNAMIC BUY LINKS */}
          <div className="pt-8 border-t border-slate-100">
            {/* <h3 className="text-lg mb-6">{t('bookDetails.getCopy')}</h3> */}
            <div className="flex flex-wrap gap-4">
              <BuyLinks links={book.links} />
            </div>
          </div>
        </div>
      </div>

      <SeriesSection currentBook={book} />
    </article>
  );
}
