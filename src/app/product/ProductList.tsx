'use client';
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { sampleData } from '../../../db/sample-data';



type Product = {
  id: number; 
  name: string;
  price: number;
  image?: string;
};

type Order = {
  id: number;
  item_name: string;
  quantity: number;
  buyer_name: string;
  contact: string;
  address: string;
  status: string;
};

type Data = {
  products: Product[];
  orders: Order[];
};

export default function ProductList() {
  const [data, setData] = useState<Data>({ products: [], orders: [] });

  useEffect(() => {
    // Set the combined data state from the updated sample data
    setData({ products: sampleData.products, orders: sampleData.orders });
  }, []);  // Runs only once when the component mounts

  return (
    <div>
      <h2 className="text-2xl font-semibold text-green-900 mb-4">Available Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
