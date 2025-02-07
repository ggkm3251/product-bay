import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from '../components/CartContext';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (err) {
        setError('Failed to load product details. Please try again.');
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center">Loading product details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  if (!product) {
    return <p className="text-center">Product not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <button
        className="mb-4 bg-gray-300 py-2 px-4 rounded"
        onClick={() => navigate(-1)}
      >
        Back to Products
      </button>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
          <p className="text-xl font-semibold text-gray-700 mb-2">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-yellow-500 text-lg">⭐ {product.rating.rate} / 5</span>
            <span className="text-gray-500">({product.rating.count} reviews)</span>
          </div>
          <button
            className="bg-blue-600 text-blue-600 py-2 px-4 rounded mt-4 hover:bg-blue-700 transition"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
