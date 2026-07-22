import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - mstore</title>
      </Head>
      <Header />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <p>Last Updated: January 2024</p>
            
            <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            <p>We collect information you provide directly, such as when you create an account or make a purchase.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            <p>We use your information to process orders, send updates, and improve our services.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">Security</h2>
            <p>We use SSL encryption to protect your personal and payment information.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}