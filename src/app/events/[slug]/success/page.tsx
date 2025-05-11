'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface SuccessPageProps {
  searchParams: {
    session_id: string;
  };
}

const SuccessPage = ({ searchParams }: SuccessPageProps) => {
  useEffect(() => {
    // In a real application, you would verify the session and update your database
    console.log('Session ID:', searchParams.session_id);
  }, [searchParams.session_id]);

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-20 h-20 bg-green-500 rounded-full mx-auto mb-8 flex items-center justify-center"
          >
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </motion.div>

          <h1 className="text-4xl font-bebas mb-4">Thank You!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Your tickets have been purchased successfully.
          </p>

          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">What's Next?</h2>
            <ul className="text-left space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Check your email for your ticket confirmation and receipt
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Add the event to your calendar using the link in your email
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                <span>
                  Arrive 30 minutes before the event with your ticket
                </span>
              </li>
            </ul>
          </div>

          <div className="space-x-4">
            <Link
              href="/events"
              className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              View All Events
            </Link>
            <Link
              href="/"
              className="inline-block border border-white px-8 py-3 rounded-md font-semibold hover:bg-gray-900 transition"
            >
              Return Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SuccessPage; 