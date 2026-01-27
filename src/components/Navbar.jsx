import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

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
        <div className='flex flex-row items-center'>
          {isOpen || <Menu size={16} />}
          {isOpen && <X size={16} />}
          <button
            className="uppercase tracking-widest ml-2 py-2"
            onClick={() => setIsOpen(! isOpen)}
          >
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}

              className="top-16 w-full"
            >
              <div className="flex flex-col items-center space-y-2 py-2 uppercase tracking-widest text-sm">
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
