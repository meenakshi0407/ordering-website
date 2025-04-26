'use client';
import { useState } from 'react';

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('');
  const [status, setStatus] = useState('');

  const fetchStatus = async () => {
    const res = await fetch(`/api/orders/${orderId}`);
    const data = await res.json();
    setStatus(data?.status || 'Order not found');
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🔍 Track Your Order</h2>
      <input
        type="text"
        placeholder="Enter Order ID"
        onChange={(e) => setOrderId(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={fetchStatus} className="bg-blue-600 text-white px-4 py-2">Track</button>
      {status && <p className="mt-4 font-medium">Status: {status}</p>}
    </div>
  );
}
