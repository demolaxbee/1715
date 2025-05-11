import Link from 'next/link';

export default function MerchPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bebas mb-6">Merch Coming Soon</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our exclusive merchandise collection is launching this summer. Sign up for our newsletter to be the first to know when we drop.
            </p>
          </div>

          {/* Preview Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800">
                {/* Replace with product image */}
                <div className="w-full h-64 bg-gray-800" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Classic Tee</h3>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 mb-4">Premium cotton t-shirt with our signature design.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">$35</span>
                  <button 
                    className="bg-white/10 text-white px-6 py-2 rounded-md hover:bg-white/20 transition cursor-not-allowed"
                    disabled
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800">
                {/* Replace with product image */}
                <div className="w-full h-64 bg-gray-800" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Hoodie</h3>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 mb-4">Cozy hoodie perfect for any occasion.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">$65</span>
                  <button 
                    className="bg-white/10 text-white px-6 py-2 rounded-md hover:bg-white/20 transition cursor-not-allowed"
                    disabled
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1 bg-gray-800">
                {/* Replace with product image */}
                <div className="w-full h-64 bg-gray-800" />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">Cap</h3>
                  <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                    Coming Soon
                  </span>
                </div>
                <p className="text-gray-400 mb-4">Stylish cap with embroidered logo.</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">$30</span>
                  <button 
                    className="bg-white/10 text-white px-6 py-2 rounded-md hover:bg-white/20 transition cursor-not-allowed"
                    disabled
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-gray-900 rounded-lg p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bebas mb-4">Get Notified</h2>
              <p className="text-gray-300 mb-8">
                Be the first to know when our merchandise drops. Sign up for exclusive early access and special offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white/20"
                  required
                />
                <button
                  type="submit"
                  className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 