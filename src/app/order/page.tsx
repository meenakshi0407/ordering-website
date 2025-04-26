'use client';
import { useState } from 'react';

export default function OrderForm() {
  const [form, setForm] = useState({
    item_name: '',
    quantity: '',
    buyer_name: '',
    contact: '',
    address: ''
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert('Order placed!');
      setForm({ item_name: '', quantity: '', buyer_name: '', contact: '', address: '' });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">📝 Place an Order</h2>
      <div className="space-y-2">
        {Object.keys(form).map(field => (
          <input
            key={field}
            name={field}
            value={form[field as keyof typeof form]}
            onChange={handleChange}
            className="block border p-2 w-full"
            placeholder={field.replace('_', ' ')}
          />
        ))}
        <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
          Submit
        </button>
      </div>
    </div>
  );
}
