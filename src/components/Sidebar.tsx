import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiHome, FiBox } from 'react-icons/fi'; // Importing icons

const Sidebar: React.FC = () => (
  <div className="w-64 h-screen bg-gray-800 text-white fixed">
    <div className="p-6 font-bold text-xl">Admin Panel</div>
    <nav className="mt-4">
      <NavLink 
        to="/admin" 
        className={({ isActive }) => 
          `flex items-center py-2 px-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
        }
      >
        <FiHome className="mr-3" />
        Analytics
      </NavLink>

      <NavLink 
        to="/admin/products" 
        className={({ isActive }) => 
          `flex items-center py-2 px-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`
        }
      >
        <FiBox className="mr-3" />
        Product Management
      </NavLink>
    </nav>
  </div>
);

export default Sidebar;
