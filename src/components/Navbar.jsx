import React, { useState, useEffect } from 'react';
import logo from '../assets/prologo.jpg';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Scroll direction detect karne ka logic
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Agar mobile menu khula hai toh navbar ko mat chhupao
        if (isOpen) return;

        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          // Niche scroll kar rahe hain -> Gayab ho jao
          setShowNavbar(false);
        } else {
          // Upar scroll kar rahe hain -> Wapas aa jao
          setShowNavbar(true);
        }
        // Current position save karo
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY, isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    // "transition-transform" aur "duration-500" se smooth gayab hoga
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-transform duration-500 bg-white shadow-sm ${
      showNavbar ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        {/* Logo */}
        <NavLink to="/" className="z-50">
          <img src={logo} alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[#1A2E24] font-semibold">
          <NavLink to="/blog" className={({ isActive }) => isActive ? "text-[#74A02A]" : "hover:text-[#74A02A] transition"}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "text-[#74A02A]" : "hover:text-[#74A02A] transition"}>About Us</NavLink>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-[#1A2E24] p-2 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 md:hidden overflow-hidden"
          >
            <div className="flex flex-col px-8 py-10 gap-6 text-xl font-bold text-[#1A2E24]">
              <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
              <NavLink to="/about" onClick={() => setIsOpen(false)}>About Us</NavLink>
              <button className="bg-[#A4D43B] text-[#1A2E24] py-4 rounded-2xl">Contact Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;