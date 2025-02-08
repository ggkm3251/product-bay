import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Navbar from './components/NavBar';
import ProductDetails from './pages/ProductDetails';
import { CartProvider } from './components/CartContext';
import CartPage from './pages/CartPage';
import AdminDashboard from './pages/AdminDashboard';
import ProductManagement from './components/ProductManagement';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <CartProvider>
        <Navbar />
        <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />

            {/* Admin Protected Routes */}
            <Route
              path="/admin/*"
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <PrivateRoute>
                  <ProductManagement />
                </PrivateRoute>
              }
            />
          </Routes>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
