import { useParams } from "react-router";
import { useTranslation } from "react-i18next";

export const PublicationDetails = ({book}) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  const getRelease = (book) => {
    const result = { text: t('bookDetails.releaseUnknown') };

    if ((book?.publications?.length ?? 0) === 0) return result;

    const releases = book.publications.filter(p => p.release !== null).map(p => new Date(p.release));
    if (releases.length === 0) {
      return book.status === 'soon' ? { text: t('bookDetails.releaseSoon') } : result;
    }

    const release = releases[0];
    result.text = release > Date() ? t('bookDetails.releaseIs') : t('bookDetails.releaseWas')
    result.date = release.toLocaleDateString(lang === 'da' ? 'da-DK' : 'en-US', {year: 'numeric', month: 'long', day: 'numeric'});

    return result;
  }

  const release = getRelease(book);
  const bookLangGroups = Object.groupBy(book.publications, ({ lang }) => lang);

  return (
    <div>
      <p>
        {release.text}
        {release.date && <span className="font-bold pl-1">{release.date}</span>}
      </p>
      {book.publications && Object.keys(bookLangGroups).map(bookLang =>
        <p key={bookLang}>
          {t('bookDetails.languageText')}
          <span className="font-bold pl-1">{t(`lang.${bookLang}`)}</span>
          {bookLangGroups[bookLang].length > 0 &&
            <span className="pl-2">{`(${bookLangGroups[bookLang].map(p => t(`format.${p.format}`)).join(", ")})`}</span>
          }
        </p>
      )}
    </div>
  );
}
