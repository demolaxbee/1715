'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'TikTok', url: 'https://tiktok.com' },
  ];

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={footerVariants}
        >
          <motion.div variants={itemVariants}>
            <h2 className="font-display text-3xl mb-4">BRAND</h2>
            <p className="max-w-md text-gray-400">
              A visually striking party and clothing brand that combines style, music, and culture.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="flex flex-col md:items-end">
            <h3 className="text-xl mb-4 font-bold">Connect With Us</h3>
            <ul className="flex gap-6">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p>&copy; {currentYear} Party & Clothing Brand. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
