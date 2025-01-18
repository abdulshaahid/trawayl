import React from 'react';
import { Star, Edit2, Trash2, Package, CreditCard, Smartphone, Laptop, Headphones } from 'lucide-react';

interface Order {
  id: string;
  productName: string;
  productIcon: keyof typeof productIcons;
  transactionId: string;
  price: number;
  rating: number;
  date: string;
  salesCount: number;
  status: 'delivered' | 'cancelled' | 'shipped' | 'pending';
  paymentMethod: string;
}

const productIcons = {
  package: Package,
  smartphone: Smartphone,
  laptop: Laptop,
  headphones: Headphones,
};

const statusColors = {
  delivered: 'bg-green-100 text-green-800',
  cancelled: 'bg-red-100 text-red-800',
  shipped: 'bg-blue-100 text-blue-800',
  pending: 'bg-yellow-100 text-yellow-800',
};

const orders: Order[] = [
  {
    id: '1',
    productName: 'iPhone 13 Pro',
    productIcon: 'smartphone',
    transactionId: 'TRX-789456',
    price: 999.99,
    rating: 4.5,
    date: '2024-03-15',
    salesCount: 125,
    status: 'delivered',
    paymentMethod: 'Credit Card',
  },
  {
    id: '2',
    productName: 'MacBook Pro',
    productIcon: 'laptop',
    transactionId: 'TRX-789457',
    price: 1299.99,
    rating: 5,
    date: '2024-03-14',
    salesCount: 89,
    status: 'shipped',
    paymentMethod: 'PayPal',
  },
  {
    id: '3',
    productName: 'AirPods Pro',
    productIcon: 'headphones',
    transactionId: 'TRX-789458',
    price: 249.99,
    rating: 4,
    date: '2024-03-13',
    salesCount: 256,
    status: 'pending',
    paymentMethod: 'Credit Card',
  },
  {
    id: '4',
    productName: 'Magic Keyboard',
    productIcon: 'package',
    transactionId: 'TRX-789459',
    price: 99.99,
    rating: 3.5,
    date: '2024-03-12',
    salesCount: 45,
    status: 'cancelled',
    paymentMethod: 'Debit Card',
  },
];

export default function OrderSummaryTable() {
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold">Order Summary</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Product
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rating
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Sales
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => {
              const ProductIcon = productIcons[order.productIcon];
              return (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <ProductIcon className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {order.productName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.transactionId}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    ${order.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {renderStars(order.rating)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.salesCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusColors[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.paymentMethod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Edit2 size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}