'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const ContactSection = () => {
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

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <AnimatedSection direction="left">
              <h2 className="heading-lg mb-8">
                STAY <span className="text-primary">CONNECTED</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2}>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for exclusive updates on new releases, upcoming events, and special offers.
              </p>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.4}>
              <form onSubmit={handleSubmit} className="mb-8 md:mb-0">
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
                    Subscribe
                  </motion.button>
                </div>
                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 mt-2"
                  >
                    Thanks for subscribing!
                  </motion.p>
                )}
              </form>
            </AnimatedSection>
          </div>
          
          <AnimatedSection direction="right" delay={0.2}>
            <div className="bg-gradient-to-br from-primary/20 to-purple-800/20 rounded-lg p-8 md:p-12">
              <h3 className="heading-md mb-6">Contact Information</h3>
              <div className="space-y-6 text-gray-300">
                <div>
                  <h4 className="font-bold mb-2">Email</h4>
                  <p>info@brandname.com</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Office</h4>
                  <p>123 Fashion Avenue<br />New York, NY 10001</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                      Instagram
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                      Twitter
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors">
                      TikTok
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
