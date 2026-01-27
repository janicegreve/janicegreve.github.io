import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [location]);

  const getNavLinkClass = ({ isActive }) => isActive ? "text-indigo-600 font-bold" : "text-slate-600"

  return (
    <nav className="flex flex-col items-center py-4 w-full">
      {/* MOBILE: Shows "Navbar" text or icon only on small screens */}
      <div className="block md:hidden">
        <button
          className="uppercase tracking-widest px-4 py-2"
          onClick={() => setIsOpen(! isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}

              className="top-16 w-full bg-white/90 backdrop-blur-sm"
            >
              <div className="flex flex-col items-center space-y-6 py-10 uppercase tracking-widest text-sm">
                <NavLink to="/" className={getNavLinkClass}>Welcome</NavLink>
                <NavLink to="/books" className={getNavLinkClass}>Books</NavLink>
                <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* DESKTOP: Shows all links only on medium screens and up */}
      <div className="hidden md:flex space-x-4 uppercase">
        <NavLink to="/" className={getNavLinkClass}>Welcome</NavLink>
        <NavLink to="/books" className={getNavLinkClass}>Books</NavLink>
        <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
      </div>
    </nav>
  )
}
