import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend, ArcElement } from 'chart.js';
import { Bar, Line, Pie } from 'react-chartjs-2';


ChartJS.register(BarElement, LineElement, PointElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const AdminDashboard: React.FC = () => {
  // Sales Performance Data
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales in $',
        data: [1200, 1900, 3000, 5000, 2400, 4000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  // Product Comparison Data
  const productComparisonData = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
    datasets: [
      {
        label: 'Units Sold',
        data: [500, 300, 400, 700, 600],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  // Inventory Status Data
  const inventoryData = {
    labels: ['Electronics', 'Clothing', 'Home Appliances', 'Books', 'Accessories'],
    datasets: [
      {
        label: 'Inventory Count',
        data: [50, 100, 80, 30, 60],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
      },
    ],
  };

  return (
    <div className="flex">
     
      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Sales Performance */}
            <Line data={salesData} />
            
            {/* Product Comparison */}
            <Bar data={productComparisonData} />
            
            {/* Inventory Status - Pie Chart */}
            <Pie data={inventoryData} />
            
            {/* Inventory Status - Horizontal Bar Chart */}
            <Bar
              data={inventoryData}
              options={{
                indexAxis: 'y',
              }}
            />
       
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
