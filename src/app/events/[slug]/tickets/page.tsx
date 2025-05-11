'use client';

import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface Event {
  title: string;
  date: string;
  price: number;
}

interface TicketPageProps {
  params: {
    slug: string;
  };
}

// Checkout Form Component
function CheckoutForm({ event, quantity }: { event: Event; quantity: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/events/${event.title.toLowerCase().replace(/\s+/g, '-')}/success`,
      },
    });

    if (submitError) {
      setError(submitError.message ?? 'An error occurred');
      setProcessing(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <PaymentElement />
      {error && (
        <div className="text-red-500 mt-4 text-sm">{error}</div>
      )}
      <button
        type="submit"
        disabled={!stripe || processing}
        className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition disabled:opacity-50 mt-6"
      >
        {processing ? 'Processing...' : `Pay $${(event.price * quantity * 1.1).toFixed(2)}`}
      </button>
    </form>
  );
}

const TicketPage = ({ params }: TicketPageProps) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    // In a real application, fetch event details from your API
    const fetchEvent = async () => {
      try {
        // Simulate API call
        const events = {
          'summer-night-party': {
            title: 'Summer Night Party',
            date: 'June 15, 2024',
            price: 50,
          },
          'beach-festival': {
            title: 'Beach Festival',
            date: 'July 20, 2024',
            price: 75,
          },
          'winter-wonderland': {
            title: 'Winter Wonderland',
            date: 'December 10, 2024',
            price: 60,
          },
        };

        const eventData = events[params.slug as keyof typeof events];
        if (eventData) {
          setEvent(eventData);
        } else {
          setError('Event not found');
        }
      } catch (err) {
        setError('Error loading event details');
      }
    };

    fetchEvent();
  }, [params.slug]);

  useEffect(() => {
    if (event) {
      const createPaymentIntent = async () => {
        try {
          const response = await fetch('/api/create-payment-intent', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: Math.round(event.price * quantity * 1.1 * 100), // Convert to cents
              eventTitle: event.title,
            }),
          });

          const data = await response.json();
          setClientSecret(data.clientSecret);
        } catch (err) {
          setError('Error creating payment intent');
        }
      };

      createPaymentIntent();
    }
  }, [event, quantity]);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bebas mb-4">Error</h1>
            <p className="text-xl text-gray-300">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!event || !clientSecret) {
    return (
      <div className="min-h-screen bg-black text-white py-20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bebas mb-4">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  const appearance = {
    theme: 'night',
    variables: {
      colorPrimary: '#ffffff',
      colorBackground: '#111827',
      colorText: '#ffffff',
      colorDanger: '#ef4444',
      fontFamily: 'system-ui, sans-serif',
      spacingUnit: '4px',
      borderRadius: '4px',
    },
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl font-bebas mb-8">Purchase Tickets</h1>
          
          <div className="bg-gray-900 rounded-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-400">Date: {event.date}</p>
              </div>
              <div className="text-2xl font-semibold">${event.price.toFixed(2)}</div>
            </div>

            <div className="mb-8">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-gray-800"
                >
                  -
                </button>
                <span className="text-xl">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-gray-800"
                >
                  +
                </button>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 mb-6">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${(event.price * quantity).toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Service Fee</span>
                <span>${(event.price * quantity * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-semibold">
                <span>Total</span>
                <span>${(event.price * quantity * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <Elements stripe={stripePromise} options={{ clientSecret, appearance }}>
              <CheckoutForm event={event} quantity={quantity} />
            </Elements>
          </div>

          <div className="text-sm text-gray-400">
            <p className="mb-2">• All sales are final. No refunds or exchanges.</p>
            <p className="mb-2">• Tickets are non-transferable.</p>
            <p>• Please arrive 30 minutes before the event.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TicketPage; 