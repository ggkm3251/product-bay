import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { FiShoppingCart } from 'react-icons/fi';

const Navbar: React.FC = () => {
    const { cart } = useCart();
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        setCartCount(cart.length);
      }, [cart]);

  return (
    <nav className="w-full bg-white text-white p-4 flex justify-between items-center shadow mb-8">
      <div className="text-xl font-bold">
        <Link to="/">The Band Store</Link>
      </div>

      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
        <Link to="/" className="hover:text-gray-200">Products</Link>
        <Link to="/" className="hover:text-gray-200">About</Link>
      </div>
      
      <div className="relative">
        <Link to="/cart" className="flex items-center">
          <FiShoppingCart size={24} />
          <span
            className={`absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center transform transition-transform ${
              cartCount > 0 ? 'scale-100' : 'scale-0'
            }`}
          >
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
