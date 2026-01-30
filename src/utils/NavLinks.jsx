import { NavLink } from "react-router";
import { useTranslation } from 'react-i18next';

export const NavLinks = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const getNavLinkClass = ({ isActive }) => isActive ? "text-indigo-600 font-bold" : "text-slate-600"

  return (
    <>
      <NavLink to={`/${lang}`} end className={getNavLinkClass}>{t('nav.home')}</NavLink>
      <NavLink to={`/${lang}/books`} className={getNavLinkClass}>{t('nav.books')}</NavLink>
      <NavLink to={`/${lang}/blog`} className={getNavLinkClass}>{t('nav.blog')}</NavLink>
      <NavLink to={`/${lang}/newsletter`} className={getNavLinkClass}>{t('nav.newsletter')}</NavLink>
      <NavLink to={`/${lang}/about`} className={getNavLinkClass}>{t('nav.about')}</NavLink>
    </>
  );
}
