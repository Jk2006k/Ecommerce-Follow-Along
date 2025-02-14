import React, { useEffect, useState } from 'react';
import Card from '../Homepage/productCard';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './myProduct.css';

const MyProduct = () => {
  const [products, setProducts] = useState([]);
  const userEmail = localStorage.getItem('userEmail');
  const token = localStorage.getItem('authToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (userEmail) {
      fetchProducts();
    }
  }, [userEmail]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/forms/get', {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      // Filter products uploaded by the logged-in user
      const filteredData = response.data.filter((el) => el.userEmail === userEmail);
      setProducts(filteredData);
    } catch (error) {
      console.error('Error fetching products:', error);
      alert('Failed to fetch products. Please try again.');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      const response = await axios.delete(`http://localhost:3000/forms/${id}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (response.status === 200) {
        setProducts((prevProducts) => prevProducts.filter((product) => product._id !== id));
      } else {
        console.error('Failed to delete product:', response);
        alert('Error deleting product.');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      alert('Failed to delete product. Please try again.');
    }
  };

  const handleEdit = (id) => {
    navigate(`/form/${id}`);
  };

  return (
    <div>
      <div className="topper">
          <h1 className="Heading">Watch Loft</h1>  
          <div className='nav'><Navbar/></div>
        </div>
      <div className="homepage">
        <div className="product-grid">
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product._id}
                id={product._id}
                name={product.name}
                image={product.imgUrl?.length > 0 ? `http://localhost:3000${product.imgUrl[0]}` : '/default.jpg'}
                price={product.price}
                description={product.description}
                showActions={true}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          ) : ( 
            <p>No products found.</p>
          )}
        </div>
      </div>
      </div>
  );
};

export default MyProduct;
