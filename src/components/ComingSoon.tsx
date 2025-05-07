'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we'd send this to an API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
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
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background with image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0">
          <Image 
            src="/images/coming-soon-bg.jpg"
            alt="Coming Soon Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-50"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-black/70 to-primary/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
        </div>
        
        {/* Moving patterns */}
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ backgroundPosition: '0% 0%' }}
          animate={{ backgroundPosition: '100% 100%' }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear', repeatType: 'reverse' }}
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,72,0,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container-custom relative z-10 text-white text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 
            className="heading-xl mb-6"
            variants={childVariants}
          >
            SHOP <span className="text-primary">COMING SOON</span>
          </motion.h1>
          
          <motion.div
            className="mb-12 h-1 w-24 bg-primary mx-auto"
            variants={childVariants}
          />
          
          <motion.p 
            className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
            variants={childVariants}
          >
            We're putting the final touches on our online store. Sign up to be notified when we launch and get exclusive early access to our collection.
          </motion.p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-md mx-auto mb-12"
            variants={childVariants}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="bg-white/10 text-white border border-white/20 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
              />
              <motion.button
                type="submit"
                className="btn-primary whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Notify Me
              </motion.button>
            </div>
            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-400 mt-2"
              >
                Thanks! We'll let you know when we launch.
              </motion.p>
            )}
          </motion.form>
          
          <motion.div variants={childVariants}>
            <Link 
              href="/" 
              className="text-lg inline-flex items-center text-white hover:text-primary transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M10 19l-7-7m0 0l7-7m-7 7h18" 
                />
              </svg>
              Back to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
