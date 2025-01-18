import React from 'react';
import { ArrowLeft, Package, TrendingUp, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from '../../agent_components/ui/Card';

export default function PackageStats() {
  return (
    <div className="min-h-screen bg-black pt-20 pb-20 px-4">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/" className="p-2 hover:bg-white/5 rounded-lg transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <h1 className="text-xl font-bold text-white">Package Statistics</h1>
        </div>

        <div className="grid gap-4">
          <Card className="p-4 bg-gradient-to-r from-blue-500/20">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-400">Total Packages</p>
                <p className="text-2xl font-bold text-white">24</p>
              </div>
              <Package className="w-8 h-8 text-blue-500" />
            </div>
            <div className="h-40 bg-black/20 rounded-lg mb-4">
              {/* Chart will be added here */}
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-sm text-gray-400">Active</p>
                <p className="text-lg font-semibold text-white">18</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Draft</p>
                <p className="text-lg font-semibold text-white">4</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Pending</p>
                <p className="text-lg font-semibold text-white">2</p>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="p-4 bg-gradient-to-r from-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-purple-500" />
                <p className="text-sm text-gray-400">Growth</p>
              </div>
              <p className="text-lg font-semibold text-white">+12%</p>
              <p className="text-xs text-gray-400">vs last month</p>
            </Card>

            <Card className="p-4 bg-gradient-to-r from-yellow-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <p className="text-sm text-gray-400">Avg Rating</p>
              </div>
              <p className="text-lg font-semibold text-white">4.8</p>
              <p className="text-xs text-gray-400">from 156 reviews</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}