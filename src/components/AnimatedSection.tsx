'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  amount?: number;
  once?: boolean;
}

const AnimatedSection = ({
  children,
  className = '',
  delay = 0.2,
  direction = 'up',
  amount = 0.2,
  once = true,
}: AnimatedSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: amount,
  });

  const getDirectionVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { y: 80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'down':
        return {
          hidden: { y: -80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
      case 'left':
        return {
          hidden: { x: -80, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'right':
        return {
          hidden: { x: 80, opacity: 0 },
          visible: { x: 0, opacity: 1 },
        };
      case 'none':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
      default:
        return {
          hidden: { y: 80, opacity: 0 },
          visible: { y: 0, opacity: 1 },
        };
    }
  };

  const variants = getDirectionVariants();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.8, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
