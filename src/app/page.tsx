'use client';
import Link from 'next/link';
import ProductList from './product/ProductList';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-4">🥦 Bulk Ordering Platform</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Welcome! Easily browse products, place orders, track deliveries, or manage everything from the admin dashboard.
        </p>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <Link href="/order" className="block bg-green-100 border border-green-300 hover:bg-green-200 p-6 rounded-lg shadow transition">
            <h2 className="text-xl font-semibold text-green-800 mb-2">📝 Place an Order</h2>
            <p className="text-gray-700">Submit your bulk order with delivery details.</p>
          </Link>

          <Link href="/track" className="block bg-blue-100 border border-blue-300 hover:bg-blue-200 p-6 rounded-lg shadow transition">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">🔍 Track an Order</h2>
            <p className="text-gray-700">Enter your order ID to check its current status.</p>
          </Link>

          <Link href="/admin" className="block bg-yellow-100 border border-yellow-300 hover:bg-yellow-200 p-6 rounded-lg shadow transition">
            <h2 className="text-xl font-semibold text-yellow-800 mb-2">🛠 Admin Dashboard</h2>
            <p className="text-gray-700">Manage all orders and update their statuses.</p>
          </Link>

          <Link href="/product" className="block bg-gray-100 border border-gray-300 hover:bg-gray-200 p-6 rounded-lg shadow transition">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">🛒 View Product Catalog</h2>
            <p className="text-gray-700">Browse all available vegetables and fruits.</p>
          </Link>
        </div>

        {/* Product List Section */}
        <ProductList />
      </div>
    </div>
  );
}
