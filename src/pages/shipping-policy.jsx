import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ShippingPolicy() {
  return (
    <>
      <Head>
        <title>Shipping Policy - mstore</title>
      </Head>
      <Header />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Shipping Policy</h1>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Shipping Methods</h2>
            <p>We offer multiple shipping options to get your order to you as quickly as possible.</p>
            
            <h3 className="text-xl font-bold text-gray-900">Standard Shipping</h3>
            <p>Delivery in 5-7 business days. Free on orders over $50.</p>
            
            <h3 className="text-xl font-bold text-gray-900">Express Shipping</h3>
            <p>Delivery in 2-3 business days. $15 flat rate.</p>
            
            <h3 className="text-xl font-bold text-gray-900">International Shipping</h3>
            <p>Available to 50+ countries. Rates calculated at checkout.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}