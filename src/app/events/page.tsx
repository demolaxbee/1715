'use client';

import { motion } from 'framer-motion';
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

const EventsPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bebas mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-300">
            Join us for these amazing events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <EventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bebas mb-4">Past Events</h2>
          <p className="text-gray-300 mb-8">
            Check out photos and videos from our previous events
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={`past-${event.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="aspect-w-16 aspect-h-9 bg-gray-800" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.date}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EventsPage; 