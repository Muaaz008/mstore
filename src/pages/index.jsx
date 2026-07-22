import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import { products } from '@/data/products';
import { useState } from 'react';

export default function Home() {
  const featuredProducts = products.slice(0, 4);
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email}`);
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>mstore - Premium Tech & Lifestyle Products</title>
        <meta name="description" content="Discover premium tech gadgets and lifestyle products with minimalist design" />
        <meta name="keywords" content="tech, gadgets, wireless chargers, smart home, lifestyle" />
        <meta property="og:title" content="mstore - Premium Tech" />
        <meta property="og:description" content="Shop premium tech and lifestyle products" />
        <meta property="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-lg text-gray-600">Carefully curated premium tech for modern living</p>
            </div>
            <ProductGrid products={featuredProducts} />
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges />

        {/* Testimonials */}
        <Testimonials />

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">Get exclusive deals and new product launches delivered to your inbox</p>
            <form onSubmit={handleNewsletterSignup} className="flex gap-3 mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}