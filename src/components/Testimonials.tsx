import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-inner border border-gray-200">
      <h2 className="text-2xl font-semibold text-center mb-4">What Our Customers Say</h2>
      <div className="space-y-6">
        <div className="bg-white p-4 rounded shadow">
          <p>"Great products! The quality is amazing and customer service is top-notch!"</p>
          <p className="text-yellow-500">⭐⭐⭐⭐⭐</p>
          <p>- John Doe</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <p>"Fast shipping and excellent quality. Highly recommended!"</p>
          <p className="text-yellow-500">⭐⭐⭐⭐</p>
          <p>- Jane Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
