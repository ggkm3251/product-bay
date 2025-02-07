import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import PromotionalBanner from '../components/PromotionalBanner'
import Testimonials from '../components/Testimonials'
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        };
        fetchProducts();
      }, []);

  return (
    <div>
        <PromotionalBanner />
        <h1 className="text-2xl font-bold text-center my-4">Product List</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <Testimonials />
        <Footer />
    </div>
  );
};

export default Home