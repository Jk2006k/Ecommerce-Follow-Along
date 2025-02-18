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

  const addToCart = async (product, e) => {
    try {
      e.preventDefault();
      e.stopPropagation();
      await axios.post('http://localhost:3000/cart/add', {
        product: product._id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.imgUrl[0]
      });
      alert('Product added to cart');
    } catch (error) {
      console.error('Error adding product to cart', error);
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
                product={product}
                showActions={false}
                Onadd={addToCart}
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

