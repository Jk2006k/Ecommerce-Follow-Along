import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { addressId } = location.state;

  useEffect(() => {
    fetchCartItems();
    fetchSelectedAddress();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('http://localhost:3000/cart/items');
      setCartItems(response.data);
      calculateTotalPrice(response.data);
    } catch (error) {
      console.error('Error fetching cart items', error);
    }
  };

  const fetchSelectedAddress = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/profile/addresses', {
        userEmail: localStorage.getItem('userEmail')
      });
      const address = response.data.addresses.find(addr => addr._id === addressId);
      setSelectedAddress(address);
    } catch (error) {
      console.error('Error fetching selected address', error);
    }
  };

  const calculateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total);
  };

  const handlePlaceOrder = async () => {
    try {
      await axios.post('http://localhost:3000/api/orders', {
        userEmail: localStorage.getItem('userEmail'),
        items: cartItems,
        totalPrice,
        address: selectedAddress
      });
      alert('Order placed successfully');
      navigate('/order-success');
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  if (!selectedAddress) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>
        <div className='nav'><Navbar /></div>
      </div>
      <div className="order-confirmation-container">
        <h1 className='order-confirmation-heading'>Order Confirmation</h1>
        <div className="order-items">
          <h2>Products</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item._id}>
                <img src={`http://localhost:3000${item.image}`} alt={item.name} className="order-item-image" />
                <h2>{item.name}</h2>
                <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-address">
          <h2>Delivery Address</h2>
          <p>{selectedAddress.addressLine1}, {selectedAddress.addressLine2}, {selectedAddress.city}, {selectedAddress.state}, {selectedAddress.pincode}</p>
        </div>
        <div className="order-total">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
        <button className='place-order-button' onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  );
};

export default OrderConfirmation;

