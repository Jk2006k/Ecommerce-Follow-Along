import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './cart.css';
import Navbar from '../Navbar';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCartItems();
    console.log('Cart Items:', cartItems);  
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cart/items');
      console.log('Response data:', response.data); 
      console.log('Response data type:', typeof response.data); 
      console.log('Is response data an array:', Array.isArray(response.data)); 
      if (Array.isArray(response.data)) {
        setCartItems(response.data);
        calculateTotalPrice(response.data);
      } else {
        console.error('Unexpected response data format:', response.data);
      }
    } catch (error) {
      console.error('Error fetching cart items', error);
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const updateCartItem = async (id, action) => {
    try {
      const item = cartItems.find(item => item._id === id);
      if (action === 'increase' && item.quantity >= item.stock) {
        alert('Cannot increase quantity beyond available stock');
        return;
      }

      await axios.patch(`http://localhost:3000/cart/${action}/${id}`); 
      const updatedItems = cartItems.map(item => {
        if (item._id === id) {
          const updatedQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setCartItems(updatedItems);
      calculateTotalPrice(updatedItems);
    } catch (error) {
      console.error(`Error ${action} quantity`, error);
    }
  };

  const removeCartItem = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/cart/remove/${id}`);
      const updatedItems = cartItems.filter(item => item._id !== id);
      setCartItems(updatedItems);
      calculateTotalPrice(updatedItems);
    } catch (error) {
      console.error('Error removing item from cart', error);
    }
  };

  const handlePlaceOrder = () => {
    navigate('/select-address');
  };

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>  
        <div className='nav'><Navbar/></div>
      </div>

      <div>
        <h1 className='cartt'>My Cart</h1>
        <h2 className='total'>Total Price: ${totalPrice.toFixed(2)}</h2>
        <button className='order' onClick={handlePlaceOrder}>Place Order</button>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li key={item._id}>
                <img src={`http://localhost:3000${item.image}`} alt={item.name} className="cart-item-image" />
                <h2>{item.name}</h2>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                <p>Quantity:  
                  <button className='minus' onClick={() => updateCartItem(item._id, 'decrease')} disabled={item.quantity <= 1}>-</button>
                  {item.quantity}
                  <button className='plus' onClick={() => updateCartItem(item._id, 'increase')} disabled={item.quantity >= item.stock}>+</button>
                </p>
                <button className='place' onClick={() => removeCartItem(item._id)}>Remove</button>
              </li>
            ))
          ) : (
            <p>No items in the cart</p>
          )}
        </ul>
      </div>
    </div>
  );
};


export default CartPage;


