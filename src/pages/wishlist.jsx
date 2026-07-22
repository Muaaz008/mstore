import Head from 'next/head';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { useCart } from '@/context/CartContext';

export default function Wishlist() {
  const { wishlist } = useCart();

  return (
    <>
      <Head>
        <title>Wishlist - mstore</title>
      </Head>

      <Header />
      <main className="bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Wishlist</h1>

          {wishlist.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg mb-6">Your wishlist is empty</p>
              <Link
                href="/shop"
                className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Start Shopping
              </Link>
            </div>
          ) : (
            <>
              <p className="text-gray-600 mb-8">{wishlist.length} items in your wishlist</p>
              <ProductGrid products={wishlist} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}