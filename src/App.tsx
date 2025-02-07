import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/NavBar';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './components/CartContext';
import CartPage from './pages/CartPage';

const App: React.FC = () => {
  return (
    <Router>
      <CartProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
};

export default App;
