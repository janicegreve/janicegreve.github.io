import { useParams } from 'react-router';
import { useTranslation } from 'react-i18next';

export const BuyLinks = ({ links }) => {
  const { lang } = useParams();
  const { t } = useTranslation();

  // Define which links are appropriate for which language
  const languageSpecificLinks = {
    en: ['amazonUK', 'amazonUS', 'amazonDE'],
    da: ['amazonDE'],
  };

  // Filter links based on current language
  const visiblePlatforms = languageSpecificLinks[lang].filter(platform =>
   Object.keys(links).includes(platform)
  );

  return visiblePlatforms.map(platform => (
    <a 
      key={platform}
      href={links[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-slate-900 text-white px-8 py-3 rounded-full font-fredoka uppercase tracking-widest text-xs hover:bg-indigo-600 transition-colors"
    >
      {t('buyLinks.buy')} {t(`buyLinks.${platform}`)}
    </a>
  ));
}
