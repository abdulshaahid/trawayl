import React from 'react';
import { DollarSign, TrendingUp, ArrowUpRight, Download } from 'lucide-react';
import Card from '../../agent_components/ui/Card';

const transactions = [
  {
    id: '1',
    date: '2024-03-15',
    description: 'Mountain Trek Booking',
    amount: 299,
    status: 'completed'
  },
  // Add more transactions
];

export default function Earnings() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mb-6">Earnings</h1>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-green-500">+12%</span>
            </div>
            <p className="text-sm text-gray-400">Total Earnings</p>
            <p className="text-2xl font-bold text-white">$12,450</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm text-green-500">+8%</span>
            </div>
            <p className="text-sm text-gray-400">This Month</p>
            <p className="text-2xl font-bold text-white">$2,840</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-start justify-between mb-3">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <ArrowUpRight className="w-6 h-6 text-purple-500" />
              </div>
              <span className="text-sm text-green-500">+15%</span>
            </div>
            <p className="text-sm text-gray-400">Available for Withdrawal</p>
            <p className="text-2xl font-bold text-white">$1,250</p>
          </Card>
        </div>

        <Card className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-white">Recent Transactions</h2>
            <button className="flex items-center gap-2 px-3 py-2 bg-[#2f2f2f] rounded-lg hover:bg-[#3f3f3f] transition-colors">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>

          <div className="divide-y divide-white/10">
            {transactions.map((tx) => (
              <div key={tx.id} className="py-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{tx.description}</p>
                  <p className="text-sm text-gray-400">{tx.date}</p>
                </div>
                <span className="text-primary font-semibold">+${tx.amount}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}