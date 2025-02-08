import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductManagement: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setNewProduct] = useState<Product>({ id: 0, title: '', price: 0, image: '' });
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const saveProduct = () => {
    if (editingProduct) {
      setProducts(
        products.map((p) => (p.id === editingProduct.id ? { ...editingProduct, ...newProduct } : p))
      );
    } else {
      const newId = products.length + 1;
      const newProductData = { ...newProduct, id: newId };
      setProducts([...products, newProductData]);
    }
    setNewProduct({ id: 0, title: '', price: 0, image: '' });
    setEditingProduct(null);
    setShowModal(false);
  };

  const confirmDeleteProduct = () => {
    setProducts(products.filter((p) => p.id !== confirmDelete));
    setConfirmDelete(null);
  };

  return (
    <div className="p-16">
      <h2 className="text-3xl font-bold mb-6">Product Management</h2>
      <button
        className="bg-blue-600 text-blue-600 py-2 px-4 rounded hover:bg-blue-700 transition mb-6"
        onClick={() => setShowModal(true)}
      >
        Add New Product
      </button>

      <table className="w-full border-collapse border border-gray-300 shadow-sm rounded-lg">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-4 text-left font-medium text-gray-700">ID</th>
            <th className="border p-4 text-left font-medium text-gray-700">Name</th>
            <th className="border p-4 text-left font-medium text-gray-700">Price</th>
            <th className="border p-4 text-left font-medium text-gray-700">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: any) => (
            <tr key={product.id} className="even:bg-gray-50">
              <td className="border p-4">{product.id}</td>
              <td className="border p-4">{product.title}</td>
              <td className="border p-4">${product.price.toFixed(2)}</td>
              <td className="border p-4 flex space-x-2">
                <button
                  className="bg-yellow-500 text-blue-600 py-1 px-3 rounded hover:bg-yellow-600 transition"
                  onClick={() => setEditingProduct(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-600 text-red-600 py-1 px-3 rounded hover:bg-red-700 transition"
                  onClick={() => setConfirmDelete(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            <input
              type="text"
              name="title"
              placeholder="Product Name"
              value={newProduct.title}
              onChange={handleInputChange}
              className="w-full border p-2 mb-4 rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="Price"
              value={newProduct.price}
              onChange={handleInputChange}
              className="w-full border p-2 mb-4 rounded"
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={newProduct.image}
              onChange={handleInputChange}
              className="w-full border p-2 mb-4 rounded"
            />
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
                onClick={saveProduct}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Delete Modal */}
      {confirmDelete !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Confirm Delete</h2>
            <p className="mb-6">Are you sure you want to delete this product?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
                onClick={() => setConfirmDelete(null)}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition"
                onClick={confirmDeleteProduct}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
