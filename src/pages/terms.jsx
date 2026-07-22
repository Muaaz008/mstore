import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - mstore</title>
      </Head>
      <Header />
      <main className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
          <div className="prose max-w-none text-gray-600 space-y-6">
            <p>Last Updated: January 2024</p>
            
            <h2 className="text-2xl font-bold text-gray-900">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">Use License</h2>
            <p>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</p>
            
            <h2 className="text-2xl font-bold text-gray-900">Disclaimer</h2>
            <p>The materials on mstore's website are provided on an 'as is' basis. mstore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}