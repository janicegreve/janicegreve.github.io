import { useEffect } from 'react';
import { useParams, Outlet, useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export const LanguageWrapper= () => {
  const { lang } = useParams();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const supportedLangs = ['en', 'da'];
    if (!supportedLangs.includes(lang)) {
      navigate('/en', { replace: true });
      return;
    }

    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n, navigate]);

  return <Outlet />;
}
