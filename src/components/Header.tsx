import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Mountain } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/30 backdrop-blur-md border-b border-white/10 shadow-lg '
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
        <Link to="/" className="flex items-center space-x-2 group">
            <div className=" rounded-lg p-2 transition-all duration-300 ">
              <Mountain className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-2xl font-bold text-emerald-400">
              Hillside <span className="text-gray-900">Journey</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="/" isScrolled={isScrolled}>Home</NavLink>
            <NavLink to="/about" isScrolled={isScrolled}>About</NavLink>
            <NavLink to="/packages" isScrolled={isScrolled}>Packages</NavLink>
            <NavLink to="/gallery" isScrolled={isScrolled}>Gallery</NavLink>
            <NavLink to="/contact" isScrolled={isScrolled}>Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-emerald-400'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-emerald-400'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 bg-white/10 backdrop-blur-md rounded-lg mb-4"
          >
            <div className="flex flex-col space-y-4">
              <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
                About
              </MobileNavLink>
              <MobileNavLink to="/packages" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
                Packages
              </MobileNavLink>
              <MobileNavLink to="/gallery" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
                Gallery
              </MobileNavLink>
              <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)} isScrolled={isScrolled}>
                Contact
              </MobileNavLink>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

const NavLink = ({ to, children, isScrolled }: { to: string; children: React.ReactNode; isScrolled: boolean }) => (
  <Link
    to={to}
    className={`${
      isScrolled ? 'text-gray-800' : 'text-emerald-400'
    } hover:text-primary-400 transition-colors duration-300 font-medium`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({
  to,
  onClick,
  children,
  isScrolled,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
  isScrolled: boolean;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={`${
      isScrolled ? 'text-gray-800' : 'text-white'
    } hover:text-primary-400 transition-colors duration-300 font-medium block py-2 px-4`}
  >
    {children}
  </Link>
);

export default Header;