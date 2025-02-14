import React, { useEffect, useState } from 'react';
import Card from './productCard';
import './Homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../Navbar";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('authToken');

  // Fetch products when the component is mounted
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      console.log("Fetching products...");
      const response = await axios.get('http://localhost:3000/forms/get', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      console.log("Fetched products:", response.data);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Handle Delete Function
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/forms/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="homepage">
      <h1 className="Heading">Watch Loft</h1>  

      <Navbar />

      {/* Product Grid */}
      <div className="product-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Card
              key={product._id}
              id={product._id}
              name={product.name}
              image={product.imgUrl && product.imgUrl.length > 0 ? `http://localhost:3000${product.imgUrl[0]}` : '/default.jpg'}
              price={product.price}
              description={product.description}
              showActions={false} // No delete button on homepage
            />
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
