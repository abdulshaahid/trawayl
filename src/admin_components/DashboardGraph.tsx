import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      labels: {
        boxWidth: 15,
        boxHeight: 15,
        padding: 20,
        color: '#6b7280', // Neutral gray for labels
        font: {
          family: 'Inter, sans-serif',
          size: 14,
        },
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#1f2937', // Dark gray tooltip background
      titleColor: '#ffffff',
      bodyColor: '#d1d5db',
      cornerRadius: 8,
      padding: 12,
      callbacks: {
        title: (tooltipItems: { label: any; }[]) => {
          const { label } = tooltipItems[0]; // Get the label for the hovered item
          return `Month: ${label}`;
        },
        label: (tooltipItem: { dataset: { label: any; }; raw: any; }) => {
          const datasetLabel = tooltipItem.dataset.label;
          const value = tooltipItem.raw;
          return `${datasetLabel}: ${value}`;
        },
        footer: (tooltipItems: any[]) => {
          // Additional info, e.g., total data for the month
          const total = tooltipItems.reduce((sum, item) => sum + item.raw, 0);
          return `Total: ${total}`;
        },
      },
    },
  },
  scales: {
    y: {
      ticks: {
        color: '#4b5563', // Gray color for y-axis labels
        font: {
          family: 'Inter, sans-serif',
          size: 12,
        },
      },
      grid: {
        color: '#e5e7eb', // Light gray grid lines
        borderDash: [4, 4], // Dashed lines for the grid
      },
    },
    x: {
      ticks: {
        color: '#4b5563', // Gray color for x-axis labels
        font: {
          family: 'Inter, sans-serif',
          size: 12,
        },
      },
      grid: {
        display: false, // Remove vertical grid lines
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

const data = {
  labels,
  datasets: [
    {
      label: 'Orders',
      data: [500, 800, 600, 1200, 1000, 1500],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.1)', // Light blue fill
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: '#3b82f6',
    },
    {
      label: 'Total Users',
      data: [200, 300, 400, 500, 600, 700],
      borderColor: '#10b981', // Green
      backgroundColor: 'rgba(16, 185, 129, 0.1)', // Light green fill
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
      pointBackgroundColor: '#10b981',
    },
  ],
};

export default function DashboardGraph() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Performance Overview</h2>
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
