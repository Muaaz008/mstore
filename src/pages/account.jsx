import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FiUser, FiMail, FiLogOut } from 'react-icons/fi';

export default function Account() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setIsLoggedIn(true);
      toast.success('Logged in successfully!');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.success('Logged out successfully!');
  };

  if (!isLoggedIn) {
    return (
      <>
        <Head>
          <title>Account - mstore</title>
        </Head>
        <Header />
        <main className="bg-white min-h-screen">
          <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUser className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            </div>

            <form onSubmit={handleLogin} className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">Password</label>
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Log In
              </button>
            </form>

            <p className="text-center text-gray-600">
              Don't have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Account - mstore</title>
      </Head>
      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Account</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition"
            >
              <FiLogOut className="w-4 h-4" />
              Log Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Profile */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Profile</h2>
              <div className="space-y-3 text-sm text-gray-600">
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john@example.com</p>
                <p><strong>Member Since:</strong> January 2024</p>
              </div>
            </div>

            {/* Orders */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Recent Orders</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>#12345 - $299.99</li>
                <li>#12344 - $149.99</li>
                <li>#12343 - $79.99</li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li><Link href="/wishlist" className="text-blue-600 hover:underline">Wishlist</Link></li>
                <li><Link href="/order-tracking" className="text-blue-600 hover:underline">Track Orders</Link></li>
                <li><Link href="/contact" className="text-blue-600 hover:underline">Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}