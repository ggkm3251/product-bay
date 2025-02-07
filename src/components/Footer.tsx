import React from "react";

const Footer: React.FC = () => {
    return (
      <div className="bg-blue-500 text-black p-8">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">TheBand Store</h2>
            <p>&copy; 2025 TheBand. All rights reserved.</p>
          </div>
  
          <div>
            <p>Contact Us:</p>
            <p>Email: support@theband.co.ke</p>
            <p>Phone: +254 115-767-696</p>
          </div>
  
          <div>
            <p>Follow Us:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300">Facebook</a>
              <a href="#" className="text-blue-300">Twitter</a>
              <a href="#" className="text-blue-300">Instagram</a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;