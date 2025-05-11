'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1,
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { 
      x: 0,
      transition: { 
        type: 'tween',
        duration: 0.3,
      }
    },
    exit: { 
      x: '100%',
      transition: { 
        type: 'tween',
        duration: 0.3,
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
      <div className="container-custom py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-50"
        >
          <Link href="/" className="font-bebas text-3xl text-white">
            1715
          </Link>
        </motion.div>
        
        {/* Desktop Navigation */}
        <motion.nav 
          className="hidden md:block"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.ul className="flex gap-8">
            <motion.li variants={itemVariants}>
              <Link href="/" className="navbar-link">
                Home
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/events" className="navbar-link">
                Events
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/merch" className="navbar-link">
                Merch
              </Link>
            </motion.li>
            <motion.li variants={itemVariants}>
              <Link href="/about" className="navbar-link">
                About
              </Link>
            </motion.li>
          </motion.ul>
        </motion.nav>

        {/* Mobile Menu Button */}
        <motion.button 
          className="md:hidden z-50 relative w-8 h-6 flex flex-col justify-between"
          onClick={toggleMenu}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`w-full h-0.5 bg-white transform transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="fixed inset-0 bg-black/95 md:hidden pt-24 px-8"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={mobileMenuVariants}
            >
              <nav>
                <ul className="flex flex-col gap-6 items-center text-white text-2xl">
                  <motion.li 
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/" className="navbar-link">
                      Home
                    </Link>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/events" className="navbar-link">
                      Events
                    </Link>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/merch" className="navbar-link">
                      Merch
                    </Link>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    onClick={() => setIsOpen(false)}
                  >
                    <Link href="/about" className="navbar-link">
                      About
                    </Link>
                  </motion.li>
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
