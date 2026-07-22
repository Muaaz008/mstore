import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FiCheckCircle, FiTruck, FiBox, FiHome } from 'react-icons/fi';

export default function OrderTracking() {
  const steps = [
    { label: 'Order Confirmed', icon: FiCheckCircle, status: 'completed' },
    { label: 'Processing', icon: FiBox, status: 'completed' },
    { label: 'Shipped', icon: FiTruck, status: 'current' },
    { label: 'Delivered', icon: FiHome, status: 'pending' },
  ];

  return (
    <>
      <Head>
        <title>Order Tracking - mstore</title>
      </Head>

      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <FiCheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
            <p className="text-gray-600 text-lg mb-4">Order #12345 • Expected delivery: July 29, 2024</p>
          </div>

          {/* Tracking Steps */}
          <div className="mb-12">
            <div className="flex justify-between mb-8">
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 transition ${
                        step.status === 'completed'
                          ? 'bg-blue-600 text-white'
                          : step.status === 'current'
                          ? 'bg-blue-600 text-white ring-4 ring-blue-200'
                          : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-sm text-gray-600 text-center">{step.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Shipping Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Shipping To</h3>
              <p className="text-gray-600">John Doe</p>
              <p className="text-gray-600">123 Main Street</p>
              <p className="text-gray-600">San Francisco, CA 94105</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Tracking Info</h3>
              <p className="text-gray-600 mb-2">Carrier: FedEx</p>
              <p className="text-gray-600 font-mono text-blue-600">1Z999AA10123456784</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/shop"
              className="flex-1 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account"
              className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition text-center"
            >
              View Account
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}