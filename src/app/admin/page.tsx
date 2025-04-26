'use client';
import { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const res = await fetch('/api/orders');
    const data = await res.json();
    setOrders(data);
  };

  const updateStatus = async (id: number, status: string) => {
    await fetch(`/api/orders/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    fetchOrders();
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">🛠 Admin Dashboard</h2>
      {orders.map((order: any) => (
        <div key={order.id} className="border p-4 mb-3 rounded bg-white">
          <p><strong>{order.item_name}</strong> – {order.quantity} units</p>
          <p>{order.buyer_name} ({order.contact})</p>
          <p>{order.address}</p>
          <p>Status: <strong>{order.status}</strong></p>
          <div className="space-x-2 mt-2">
            {['Pending', 'In Progress', 'Delivered'].map(s => (
              <button
                key={s}
                onClick={() => updateStatus(order.id, s)}
                className="bg-gray-300 px-2 py-1 rounded"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
