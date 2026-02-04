import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'da' : 'en';
    const newPath = location.pathname.replace(`/${i18n.language}`, `/${newLang}`);
    navigate(newPath);
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="uppercase text-xs tracking-widest px-2 py-1 border border-slate-200 rounded hover:bg-slate-50 cursor-pointer"
      aria-label="Switch Language"
    >
      {i18n.language === 'en' ? '→ Dansk' : '→ English'}
    </button>
  );
}
