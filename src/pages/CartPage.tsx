import React from 'react';
import { useCart } from '../components/CartContext';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className=" p-8">
      <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item: any) => (
            <div key={item.id} className="bg-white p-4 rounded shadow flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-red-600 py-1 px-3 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
