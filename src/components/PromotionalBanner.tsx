import React from 'react';

const PromotionalBanner: React.FC = () => {
  return (
    <div className="bg-yellow-500 text-white p-4 text-center rounded-lg shadow-inner border border-gray-200">
      <h2 className="text-xl font-semibold">Current Offers: Get 20% Off on Selected Items!</h2>
      <p>Don't miss out on our featured products at discounted prices.</p>
    </div>
  );
};

export default PromotionalBanner;