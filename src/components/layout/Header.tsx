'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/types';
import { smoothScroll } from '@/lib/utils';

const navigation: NavigationItem[] = [
  { name: 'Home', href: 'hero' },
  { name: 'About', href: 'about' },
  { name: 'Skills', href: 'skills' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    if (href !== 'contact') {
      smoothScroll(href);
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isContactPage
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 0.1, 0.1, 0.9] }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/"
              className={`text-2xl font-bold transition-colors duration-300 ${
                isScrolled || isContactPage ? 'text-gray-900' : 'text-white'
              }`}
            >
              Henry Yim
            </Link>
          </motion.div>

          {/* Desktop Navigation - only show on homepage */}
          {!isContactPage && (
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => {
                  if (item.name === 'Contact') {
                    return (
                      <Link
                        key={item.name}
                        href="/contact"
                        className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                          isScrolled ? 'text-gray-700' : 'text-white/90'
                        }`}
                      >
                        <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }}>
                          {item.name}
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                          />
                        </motion.div>
                      </Link>
                    );
                  }
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className={`px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-blue-600 relative group ${
                        isScrolled ? 'text-gray-700' : 'text-white/90'
                      }`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.name}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 origin-left"
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Mobile menu button - only show on homepage */}
          {!isContactPage && (
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 rounded-md transition-colors duration-300 ${
                  isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          )}
        </div>

        {/* Mobile Navigation - only show on homepage */}
        <AnimatePresence>
          {isOpen && !isContactPage && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200">
                {navigation.map((item) => {
                  if (item.name === 'Contact') {
                    return (
                      <Link
                        key={item.name}
                        href="/contact"
                        className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                          {item.name}
                        </motion.div>
                      </Link>
                    );
                  }
                  return (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-all duration-200"
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.name}
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}