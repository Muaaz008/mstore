import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    question: 'What is the warranty on products?',
    answer: 'Most products come with a 1-2 year manufacturer warranty. Some items may have extended warranty options available at checkout.',
  },
  {
    question: 'Do you offer international shipping?',
    answer: 'Yes, we ship to over 50 countries. Shipping costs and delivery times vary by location. You can check rates at checkout.',
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for all products in original condition. Returns are free with a prepaid shipping label.',
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard shipping takes 5-7 business days. Express shipping (2-3 days) is available for most items.',
  },
  {
    question: 'Do you offer bulk discounts?',
    answer: 'Yes, bulk orders of 10+ items qualify for special discounts. Contact our sales team for a quote.',
  },
  {
    question: 'Are the products authentic?',
    answer: '100% authentic. All products are sourced directly from manufacturers or authorized distributors.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <>
      <Head>
        <title>FAQ - mstore</title>
      </Head>

      <Header />
      <main className="bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-300">Find answers to common questions</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 transition flex justify-between items-center"
                >
                  <span className="font-semibold text-gray-900 text-left">{faq.question}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-gray-600 transition transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t bg-white">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}