import ProductList from './ProductList';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">🛒 Product Catalog</h1>
        <ProductList />
      </div>
    </div>
  );
}
