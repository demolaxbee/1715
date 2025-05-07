'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import Link from 'next/link';
import Image from 'next/image';

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Summer Launch Party",
      date: "July 15, 2025",
      location: "Downtown Gallery",
      description: "Join us for the exclusive launch of our summer collection with live music and refreshments.",
      image: "/images/event-1.jpg"
    },
    {
      id: 2,
      title: "Fashion Showcase",
      date: "August 24, 2025",
      location: "Urban Arts Center",
      description: "Experience our full collection on the runway with special guest performances.",
      image: "/images/event-2.jpg"
    },
    {
      id: 3,
      title: "Collab Release Party",
      date: "September 10, 2025",
      location: "The Grand Venue",
      description: "Celebrating our exciting new collaboration with DJ sets and limited edition merchandise.",
      image: "/images/event-3.jpg"
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background pattern */}
      <motion.div 
        className="absolute inset-0 opacity-5 z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(#ff4800_1px,transparent_1px)] [background-size:20px_20px]" />
      </motion.div>

      <div className="container-custom relative z-10">
        <AnimatedSection>
          <h2 className="heading-lg text-center mb-16">
            UPCOMING <span className="text-primary">EVENTS</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <AnimatedSection 
              key={event.id} 
              delay={0.2 * index} 
              className="h-full"
            >
              <motion.div 
                className="border border-gray-200 bg-white rounded-lg h-full flex flex-col hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Event image */}
                <div className="relative h-56 w-full">
                  <Image 
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-primary font-bold text-sm tracking-wider mb-2 block">
                    {event.date}
                  </span>
                  <h3 className="heading-sm mb-3">{event.title}</h3>
                  <p className="text-gray-500 mb-2 font-medium">
                    {event.location}
                  </p>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {event.description}
                  </p>
                  <Link 
                    href="/" 
                    className="font-bold text-primary hover:underline transition-all duration-300"
                  >
                    Learn more
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
