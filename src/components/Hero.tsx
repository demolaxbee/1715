'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <section className="relative min-h-screen flex items-center py-20 pt-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Hero background image */}
        <div className="absolute inset-0 overflow-hidden">
          <Image 
            src="/images/20230924.jpg" 
            alt="Brand Hero Background"
            fill
            priority
            style={{ objectFit: 'cover' }}
            className="brightness-75"
          />
        </div>
      </div>

      <div className="container-custom relative z-10 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h4
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-primary font-semibold text-lg mb-2"
            >
              A NEW ERA IN FASHION
            </motion.h4>
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="heading-xl text-white mb-6"
            >
              WHERE STYLE <br />
              MEETS ENERGY
            </motion.h1>
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg md:text-xl opacity-90 mb-8 max-w-md"
            >
              Experience the perfect blend of party culture and cutting-edge fashion. Our brand embodies the vibrant energy of nightlife with bold designs.
            </motion.p>
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <Link href="/shop" className="btn-primary mr-4">
                Visit Shop
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.4, 
              duration: 1.2,
              ease: [0.215, 0.61, 0.355, 1] 
            }}
            className="relative aspect-[4/5] w-full max-w-md mx-auto"
          >
            {/* Featured product/brand image */}
            <div className="relative w-full h-full overflow-hidden rounded-lg shadow-2xl">
              <Image 
                src="/images/hero-product.jpg" 
                alt="Featured Product"
                fill
                style={{ objectFit: 'cover' }}
                className="hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
