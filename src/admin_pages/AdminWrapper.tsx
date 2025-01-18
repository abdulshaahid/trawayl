import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom';
import OrdersTable from '../admin_components/OrdersTable';
import AgentForm from '../admin_components/AgentForm';
import AdminDashboard from './AdminDashboard';
import AdminSettings from '../admin_components/AdminSettings';
import PAGEerror from '../components/PAGEerror.tsx';
import AdminSidebar from '../admin_components/AdminSidebar';
import OrderSummaryTable from '../admin_components/OrderSummaryTable';

const AdminWrapper = () => {
  const routes = useRoutes([
    {
      element: (
        <div className="flex">
          <AdminSidebar />
          <main className="flex-1 bg-gray-100 min-h-screen">
            <Outlet />
          </main>
        </div>
      ),
      children: [
        { path: '/dashboard', element: <AdminDashboard /> },
        {
          path: '/orders',
          element: (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-primary">Orders</h1>
              <OrdersTable />
            </div>
          ),
        },
        {
          path: '/agent-add',
          element: (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-primary">Add New Agent</h1>
              <AgentForm />
            </div>
          ),
        },
        {
          path: '/OrderSummaryTable',
          element: (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-primary">Order Summary Table</h1>
              <OrderSummaryTable />
            </div>
          ),
        },
        {
          path: '/settings',
          element: (
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-6 text-primary">Settings</h1>
              <AdminSettings />
            </div>
          ),
        },
      ],
    },
    {
      path: '*',
      element: <PAGEerror />,
    },
  ]);

  return routes;
};

export default AdminWrapper;
