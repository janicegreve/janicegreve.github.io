import { NavLink } from "react-router";

export const NavLinks = () => {
  const getNavLinkClass = ({ isActive }) => isActive ? "text-indigo-600 font-bold" : "text-slate-600"

  return (
    <>
      <NavLink to="/" className={getNavLinkClass}>Welcome</NavLink>
      <NavLink to="/books" className={getNavLinkClass}>Books</NavLink>
      <NavLink to="/blog" className={getNavLinkClass}>Blog</NavLink>
      <NavLink to="/newsletter" className={getNavLinkClass}>Newsletter</NavLink>
      <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
    </>
  );
}
