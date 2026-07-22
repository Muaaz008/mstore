import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - mstore</title>
      </Head>

      <Header />
      <main className="bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">About mstore</h1>
            <p className="text-xl text-gray-300">Curating premium tech for modern living</p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At mstore, we believe that great technology should be accessible to everyone. Our mission is to curate and deliver the finest premium tech products that enhance daily life through innovative design and superior quality.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We partner with leading manufacturers worldwide to bring you products that combine functionality, aesthetics, and sustainability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/20 to-transparent rounded-2xl p-8 border border-blue-600/20">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose mstore?</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Carefully curated premium products</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Competitive pricing with regular discounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>Fast and reliable shipping</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>30-day easy return policy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>24/7 customer support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Team */}
          <div className="py-16 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['CEO', 'CTO', 'Head of Customer Success'].map((role, i) => (
                <div key={i} className="text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 mx-auto mb-4"></div>
                  <h3 className="font-bold text-gray-900 mb-1">Team Member</h3>
                  <p className="text-gray-600">{role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}