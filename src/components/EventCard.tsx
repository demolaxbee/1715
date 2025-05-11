'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  price: number;
  image: string;
  slug: string;
}

const EventCard = ({ title, date, description, price, image, slug }: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="aspect-w-16 aspect-h-9 bg-gray-800 relative overflow-hidden">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-2">{date}</p>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">${price}</span>
          <Link 
            href={`/events/${slug}/tickets`}
            className="bg-white text-black px-6 py-2 rounded-md hover:bg-gray-200 transition"
          >
            Get Tickets
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard; 