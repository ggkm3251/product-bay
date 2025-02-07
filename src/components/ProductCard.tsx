import React from "react";

import { Link } from 'react-router-dom';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="bg-white p-12 rounded shadow-md hover:shadow-lg transition-all rounded-lg shadow-inner border border-gray-200">
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded mb-4" />
      <h3 className="text-xl font-semibold">{product.title}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default ProductCard;