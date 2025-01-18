import React from 'react';
import { Users, ShoppingBag, DollarSign, TrendingUp } from 'lucide-react';
import DashboardCard from '../admin_components/DashboardCard';
import DashboardGraph from '../admin_components/DashboardGraph';
import OrderSummaryTable from '../admin_components/OrderSummaryTable';

export default function AdminDashboard() {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        <DashboardCard
          title="Total Users"
          value="1,234"
          icon={Users}
          trend={{ value: 12, isPositive: true }}
        />
        <DashboardCard
          title="Total Orders"
          value="856"
          icon={ShoppingBag}
          trend={{ value: 8, isPositive: true }}
        />
        <DashboardCard
          title="Revenue"
          value="$45,678"
          icon={DollarSign}
          trend={{ value: 5, isPositive: true }}
        />
        <DashboardCard
          title="Growth"
          value="23%"
          icon={TrendingUp}
          trend={{ value: 3, isPositive: false }}
        />
      </div>

      <div className="mb-6 sm:mb-8">
        <DashboardGraph />
      </div>

    
    </div>
  );
}
