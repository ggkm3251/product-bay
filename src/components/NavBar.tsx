import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">The Band Store</div>
      <ul className="flex space-x-4">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
      <div className="relative">
        <FaShoppingCart size={24} />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          0
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
