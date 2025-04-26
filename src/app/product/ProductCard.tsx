'use client';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-gray-300 rounded-lg p-4 bg-white shadow hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-green-800 mb-1">{product.name}</h3>
      <p className="text-gray-700">₹{product.price} per unit</p>
      <Link href="/order">
        <button className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Order Now
        </button>
      </Link>
    </div>
  );
}
