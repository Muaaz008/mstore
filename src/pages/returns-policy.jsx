import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReturnsPolicy() {
  return (
    <>
      <Head>
        <title>Returns Policy - mstore</title>
      </Head>
      <Header />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Returns Policy</h1>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">30-Day Returns</h2>
            <p>We offer a hassle-free 30-day return policy on all products.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">How to Return</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact our support team with your order number</li>
              <li>Receive a prepaid return shipping label</li>
              <li>Pack the item securely and ship it back</li>
              <li>Receive a full refund within 5-7 business days</li>
            </ol>
            
            <h2 className="text-2xl font-bold text-gray-900">Conditions</h2>
            <p>Items must be in original condition with all packaging and accessories.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}