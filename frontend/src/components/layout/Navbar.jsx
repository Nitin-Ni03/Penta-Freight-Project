// src/components/layout/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Row Container - Centered */}
        <div className="flex justify-center h-15 items-center">

          {/* Desktop Navigation Links (Centered, Spaced Out, Upper-case) */}
          <div className="hidden md:flex items-center justify-center space-x-10">
            <Link 
              to="/" 
              className={`text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                isActive('/') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                isActive('/about') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              About Us
            </Link>

            {/* Services with Dropdown Chevron */}
            <div className="relative group">
              <Link 
                to="/services" 
                className={`flex items-center text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                  isActive('/services') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
                }`}
              >
                Services
                <svg className="w-3 h-3 ml-1.5 text-gray-500 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            {/* PentaKÜHL with special colored text & dropdown chevron */}
            <div className="relative group">
              <Link 
                to="/pentakuhl" 
                className="flex items-center text-[13px] font-semibold tracking-widest transition-colors duration-200"
              >
                <span className="text-gray-800 group-hover:text-orange-500 transition-colors">Penta</span>
                <span className="text-sky-500 group-hover:text-orange-500 transition-colors">KÜHL</span>
                <svg className="w-3 h-3 ml-1.5 text-gray-500 group-hover:text-orange-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
            </div>

            <Link 
              to="/industries" 
              className={`text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                isActive('/industries') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              Industries
            </Link>

            <Link 
              to="/careers" 
              className={`text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                isActive('/careers') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              Careers
            </Link>

            <Link 
              to="/contact" 
              className={`text-[13px] font-semibold tracking-widest transition-colors duration-200 uppercase ${
                isActive('/contact') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button (Only shows on mobile) */}
          <div className="flex items-center md:hidden w-full justify-between">
            <span className="text-[13px] font-bold text-gray-800 tracking-wider">MENU</span>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100 focus:outline-none"
            >
              {!isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu dropdown */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100`}>
        <div className="pt-2 pb-4 space-y-1 px-4">
          <Link 
            to="/" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/about') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/services') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            Services
          </Link>
          <Link 
            to="/pentakuhl" 
            onClick={() => setIsOpen(false)}
            className="block py-2 text-sm font-bold tracking-wider"
          >
            <span className="text-gray-800 hover:text-orange-500">Penta</span>
            <span className="text-sky-500 hover:text-orange-500">KÜHL</span>
          </Link>
          <Link 
            to="/industries" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/industries') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            Industries
          </Link>
          <Link 
            to="/careers" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/careers') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            Careers
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setIsOpen(false)}
            className={`block py-2 text-sm font-bold tracking-wider uppercase ${
              isActive('/contact') ? 'text-orange-500' : 'text-gray-800 hover:text-orange-500'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;