import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router";
import { Transition } from '@headlessui/react'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    setIsOpen(false);
  }, [location]);

  const getNavLinkClass = ({ isActive }) => isActive ? "text-indigo-600 font-bold" : "text-slate-600"

  return (
    <nav className="flex items-center">
      {/* MOBILE: Shows "Navbar" text or icon only on small screens */}
      <div className="block md:hidden">
        <button
          className="uppercase"
          onClick={() => setIsOpen(! isOpen)}
        >
          Menu
        </button>

        <Transition
          show={isOpen}
          enter="transition duration-200 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-150 ease-in"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <div className="flex flex-col space-y-2 p-4 md:hidden uppercase">
            <NavLink to="/" className={getNavLinkClass}>Welcome</NavLink>
            <NavLink to="/books" className={getNavLinkClass}>Books</NavLink>
            <NavLink to="/about" className={getNavLinkClass}>About</NavLink>
          </div>
        </Transition>
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
