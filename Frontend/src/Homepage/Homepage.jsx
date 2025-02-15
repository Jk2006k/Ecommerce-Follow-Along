import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './productCard';
import './Homepage.css';
import axios from 'axios';
import Navbar from "../Navbar";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem('authToken');

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

  return (
    <div className="homepage">
      <h1 className="Heading">Watch Loft</h1>  

      <Navbar />

      <div className="product-grid">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <Card
                id={product._id}
                name={product.name}
                image={product.imgUrl && product.imgUrl.length > 0 ? `http://localhost:3000${product.imgUrl[0]}` : '/default.jpg'}
                price={product.price}
                description={product.description}
                showActions={false}
              />
            </Link>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
