import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Order {
  id: string;
  customer: string;
  status: 'pending' | 'completed' | 'cancelled';
  date: string;
  amount: number;
}

export default function OrdersTable() {
  const orders: Order[] = [
    { id: '#ORD001', customer: 'John Doe', status: 'completed', date: '2024-03-10', amount: 299.99 },
    { id: '#ORD002', customer: 'Jane Smith', status: 'pending', date: '2024-03-11', amount: 199.50 },
    { id: '#ORD003', customer: 'Mike Johnson', status: 'cancelled', date: '2024-03-12', amount: 499.99 },
  ];

  const statusColors = {
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-green-100 text-green-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Order ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Customer
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  ${order.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between px-6 py-3 border-t">
        <button className="flex items-center px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
          <ChevronLeft size={16} />
          Previous
        </button>
        <button className="flex items-center px-3 py-1 border rounded text-gray-600 hover:bg-gray-50">
          Next
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}