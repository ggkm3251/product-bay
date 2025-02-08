import React from "react";

import { Link } from 'react-router-dom';

const ProductCard: React.FC<{ product: any }> = ({ product }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-200">
      <img src={product.image} alt={product.title} className="w-full h-32 object-contain rounded-md mb-4 bg-gray-100" />
      <h3 className="text-sm font-medium text-gray-800 mb-2 line-clamp-2">{product.title}</h3>
      <p className="text-gray-500 text-sm mb-3">${product.price.toFixed(2)}</p>
      <Link to={`/product/${product.id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default ProductCard;