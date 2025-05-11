'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import EventCard from '@/components/EventCard';

const events = [
  {
    title: 'Summer Night Party',
    date: 'June 15, 2024',
    description: 'Join us for an unforgettable night of music and celebration.',
    price: 50,
    image: '/event1.jpg',
    slug: 'summer-night-party',
  },
  {
    title: 'Beach Festival',
    date: 'July 20, 2024',
    description: 'A day of sun, sand, and amazing performances.',
    price: 75,
    image: '/event2.jpg',
    slug: 'beach-festival',
  },
  {
    title: 'Winter Wonderland',
    date: 'December 10, 2024',
    description: 'Experience the magic of winter with our special event.',
    price: 60,
    image: '/event3.jpg',
    slug: 'winter-wonderland',
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 z-10" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="container-custom relative z-20 text-center">
          <motion.h1 
            className="text-6xl md:text-8xl font-bebas mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            1715
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Entertainment brand hosting events and selling merchandise
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/events" 
              className="bg-white text-black px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              View Events
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-black text-white">
        <div className="container-custom max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas font-bold mb-16 text-center">
            <span className="text-white-600">ABOUT</span> THE BRAND
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bebas font-bold mb-4">OUR STORY</h3>
              <p className="text-gray-300">
                Founded in 2022, our brand was born from the vibrant nightlife and fashion scene. We blend cutting-edge design with the energy of the party culture.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bebas font-bold mb-4">OUR VISION</h3>
              <p className="text-gray-300">
                We aim to create clothing that transcends typical fashion boundaries, creating pieces that express individuality while maintaining quality and sustainability.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bebas font-bold mb-4">OUR STYLE</h3>
              <p className="text-gray-300">
                Bold, experimental, and always forward-thinking. Our designs capture the essence of contemporary culture with a distinctive edge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bebas mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-300">
              Don't miss out on these amazing events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <EventCard {...event} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              href="/events" 
              className="inline-block border border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition"
            >
              View All Events
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
