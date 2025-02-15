import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar';
import './cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>  
        <div className='nav'><Navbar/></div>
      </div>
      <br />
      <div className="cart-page">
        <h1>My Cart</h1>
        {cart.length === 0 ? <p>No products added.</p> : (
          <div className="cart-grid">
            {cart.map((product, index) => (
              <div key={index} className="cart-item">
                <img src={product.imgUrl ? `http://localhost:3000${product.imgUrl}` : '/default.jpg'} alt={product.name} />                <div className="cart-item-info">
                  <h2>{product.name}</h2>
                  
                  <p>${product.price}</p>
                  <button>Place your Order</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

