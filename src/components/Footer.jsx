import { useTranslation } from 'react-i18next';
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8">
      <div className="container mx-auto px-4 text-center">
        <SocialLinks size={16} iconColor="text-slate-500" />
        <p className="text-slate-500 text-sm tracking-widest mt-2">
          © {currentYear} Janice Greve. {t('footer.legal')}
        </p>
      </div>
    </footer>
  );
}
