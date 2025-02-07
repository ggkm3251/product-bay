import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Footer from '../components/Footer'
import PromotionalBanner from '../components/PromotionalBanner'
import Testimonials from '../components/Testimonials'
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [filter, setFilter] = useState('all');
    const [sort, setSort] = useState('asc');

    useEffect(() => {
        const fetchProducts = async () => {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        };
        fetchProducts();
      }, []);

    const sortedProducts = products
      .filter(product => filter === 'all' || product.category === filter)
      .sort((a, b) => (sort === 'asc' ? a.price - b.price : b.price - a.price));

  return (
    <div>
        <PromotionalBanner />

        <div className="p-4">
        {/* Filter and Sort Options */}
        <div className="flex justify-between mb-4">
          <div>
            <select onChange={(e) => setFilter(e.target.value)} className="p-2 border">
              <option value="all">All Products</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelry</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>

          <div>
            <select onChange={(e) => setSort(e.target.value)} className="p-2 border">
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>  
        </div>
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