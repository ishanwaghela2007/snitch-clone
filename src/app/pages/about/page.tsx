import React from 'react';
import Navbar from '@/components/navbar/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-emerald-600 mb-2">Snitch</h1>
            <p className="text-xl text-gray-700">Fashion that speaks your unique style</p>
          </div>

          {/* Our Story Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Born in 2018, Snitch started with a simple mission: to create fashion that doesn't compromise on style, quality, or affordability. We believe everyone deserves to express their unique personality through what they wear.
            </p>
            <p className="text-gray-600">
              What began as a small collection of men's basics has grown into a comprehensive fashion brand that's constantly evolving with the latest trends while maintaining our commitment to sustainability and ethical production.
            </p>
          </div>

          {/* What We Offer - Simplified SVG elements to avoid issues */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 text-2xl">+</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Trendy Collections</h3>
                <p className="text-gray-600">Fresh styles that keep you ahead of the fashion curve without breaking the bank.</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 text-2xl">✓</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Quality Materials</h3>
                <p className="text-gray-600">Carefully selected fabrics and materials that ensure comfort and durability.</p>
              </div>
              <div className="text-center p-4">
                <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-emerald-600 text-2xl">♻</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Eco-friendly production methods and materials that respect our planet.</p>
              </div>
            </div>
          </div>

          {/* Our Collections */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Collections</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">Urban Street</h3>
      <p className="text-gray-600 mb-4">
        Bold designs inspired by urban culture and streetwear trends.
      </p>
      <img
        src="https://images.squarespace-cdn.com/content/v1/607cc34ebab4b20ba47a3b97/040dd35e-f5c4-4ecb-93cf-f986934fb43c/street-style-inspiration-the-ultimate-guide-to-effortless-urban-fashion.png"
        alt="Urban Street"
        className="h-40 w-full object-cover rounded-md"
      />
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">Classic Essentials</h3>
      <p className="text-gray-600 mb-4">
        Timeless pieces that form the foundation of every wardrobe.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMYjuDxfdwcLdBQNWt0_qhDyl0-GkCEAPvEA&s"
        alt="Classic Essentials"
        className="h-40 w-full object-cover rounded-md"
      />
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">Weekend Casual</h3>
      <p className="text-gray-600 mb-4">
        Comfortable yet stylish outfits perfect for your downtime.
      </p>
      <img
        src="https://media.gq.com/photos/66e31a686ccf31cded51daa4/4:3/pass/todd-snyder-lede-3.png"
        alt="Weekend Casual"
        className="h-40 w-full object-cover rounded-md"
      />
    </div>
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3 className="font-semibold text-gray-800 mb-2">Work Ready</h3>
      <p className="text-gray-600 mb-4">
        Professional attire that doesn't sacrifice style for formality.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Pe6_eRqBFgzJfg8_kloDWM1SWTRN5giUOQ&s"
        alt="Work Ready"
        className="h-40 w-full object-cover rounded-md"
      />
    </div>
  </div>
</div>

          {/* Stats */}
          <div className="bg-emerald-600 rounded-lg shadow-md p-8 mb-8 text-white">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-4xl font-bold mb-2">50+</p>
                <p className="text-lg">Countries Shipped To</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">500K+</p>
                <p className="text-lg">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">1000+</p>
                <p className="text-lg">Unique Products</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-gray-600 mb-4">
              Have questions about our products, shipping, or anything else? We're here to help!
            </p>
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="mb-4 md:mb-0 md:w-1/2">
                <h3 className="font-semibold text-gray-800 mb-2">Customer Service</h3>
                <p className="text-emerald-600">support@snitchfashion.com</p>
                <p className="text-gray-600">1-800-SNITCH-1</p>
              </div>
              <div className="md:w-1/2">
                <h3 className="font-semibold text-gray-800 mb-2">Headquarters</h3>
                <p className="text-gray-600">123 Fashion Avenue<br />New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}