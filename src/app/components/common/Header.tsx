'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesList = [
  { name: 'Nursing Academic Support', path: '/nursing-academic-support' },
  { name: 'Subject-Matter Tutoring', path: '/nursing-tutoring' },
  { name: 'Proofreading & Formatting', path: '/proofreading-formatting-services' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  const isActive = (path: string) => pathname === path;

  const headerClass = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
  }`;

  const navLinkClass = (active: boolean) =>
    `relative px-3 py-2 transition-colors duration-300 ${
      active ? 'text-secondary-400 font-medium' : 'text-neutral-700 hover:text-primary-500'
    }`;

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { type: 'tween', duration: 0.3 } },
    exit: { opacity: 0, x: '100%', transition: { type: 'tween', duration: 0.3 } },
  };

  return (
    <header className={headerClass}>
      <div className="container-custom mx-auto flex justify-between items-center">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <img src="/Oce 1.png" alt="Logo" className="h-16 w-16 -mt-3 object-contain" />
          <span className="font-ageo font-semibold text-xl text-black">
            Online Course Experts
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 font-medium">
          <div className="flex items-center gap-0">
            <Link href="/" className={navLinkClass(isActive('/'))}>Home</Link>
            <Link href="/about-us" className={navLinkClass(isActive('/about-us'))}>About Us</Link>
           <div className="relative group">
            
  <div className={navLinkClass(false) + ' flex items-center gap-1 cursor-pointer'}>
    <Link href="/services" className={navLinkClass(isActive('/services'))}>
      Services
    </Link>
    <span className="text-xs -ml-3">▼</span>
  </div>
  <div className="absolute hidden group-hover:flex flex-col bg-white shadow-md  rounded-md w-48 z-50">
    {servicesList.map((service, index) => (
      <Link
        key={index}
        href={service.path}
        onClick={closeMenu}
        className="px-4 py-2 hover:bg-gray-100 text-neutral-700"
      >
        {service.name}
      </Link>
    ))}
  </div>
</div>

            <Link href="/how-it-works" className={navLinkClass(isActive('/how-it-works'))}>How It Works</Link>
            <Link href="/blog" className={navLinkClass(isActive('/blog'))}>Resources</Link>
          </div>
          <div className="flex items-center gap-1">
            <Link
              href="/nursing-academic-support"
              className="bg-primary-500 hover:bg-pink-600 focus:ring-primary-500 text-white px-3 py-2 rounded-md text-xs md:text-sm transition duration-200"
            >
              Academic Support
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-neutral-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <AnimatePresence>
  {isMenuOpen && (
    <motion.div 
      className="fixed top-0 right-0 w-full h-auto z-50 bg-white/90 backdrop-blur-sm md:hidden"
      variants={mobileMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex justify-between items-center p-1 border-b">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-2">
          <img src="/Oce 1.png" alt="Logo" className="h-16 w-16 ml-36 object-contain" />
        </Link>
        <button 
          className="p-2 text-neutral-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <nav className="flex flex-col py-2 text-center">
        <Link href="/" className={navLinkClass(isActive('/'))} onClick={closeMenu}>Home</Link>
        <Link href="/about-us" className={navLinkClass(isActive('/about-us'))} onClick={closeMenu}>About Us</Link>
  
       {/* Services Dropdown */}
<div className="flex flex-col text-center">
  <div className="flex items-center justify-center gap-2 px-3 py-2">
    <Link
      href="/services"
      className={navLinkClass(isActive('/services'))}
      onClick={closeMenu}
    >
      Services
    </Link>
    <button
      onClick={() => setIsServicesOpen(prev => !prev)}
      className="text-neutral-700 -ml-4 text-sm focus:outline-none"
      aria-label="Toggle Services Dropdown"
    >
      {isServicesOpen ? '▲' : '▼'}
    </button>
  </div>

  {isServicesOpen && (
    <div className="text-center flex flex-col">
      {servicesList.map((service, index) => (
        <Link
          key={index}
          href={service.path}
          onClick={closeMenu}
          className="py-1 text-sm text-neutral-700 hover:text-primary-500"
        >
          {service.name}
        </Link>
      ))}
    </div>
  )}
</div>

      

        <Link href="/how-it-works" className={navLinkClass(isActive('/how-it-works'))} onClick={closeMenu}>How It Works</Link>
        <Link href="/blog" className={navLinkClass(isActive('/blog'))} onClick={closeMenu}>Resources</Link>
      <Link 
  href="/nursing-academic-support" 
  className="mx-auto mt-4 -px-2 py-2 bg-primary-500 text-white text-sm text-center rounded-md w-2/5"
  onClick={closeMenu}
>
 Academic Support
</Link>
</nav>
    </motion.div>
  )}
</AnimatePresence>

      </div>
    </header>
  );
};

export default Header;
