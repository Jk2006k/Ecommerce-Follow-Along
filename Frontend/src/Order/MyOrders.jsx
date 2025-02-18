import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar';
import './MyOrders.css';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  const fetchUserOrders = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/user/orders', {
        userEmail: localStorage.getItem('userEmail')
      });
      console.log('Orders fetched:', response.data.orders);
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching user orders:', error);
    }
  };

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>
        <div className='nav'><Navbar /></div>
      </div>
      <div className="my-orders-container">
        <h1 className='my-orders-heading'>My Orders</h1>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order._id} className="order-item">
              <h2>Order ID: {order._id}</h2>
              <h3>Status: {order.status}</h3>
              <h3>Total Price: ${order.totalPrice.toFixed(2)}</h3>
              <h3>Delivery Address:</h3>
              <p>{order.address.addressLine1}, {order.address.addressLine2}, {order.address.city}, {order.address.state}, {order.address.pincode}</p>
              <h3>Items:</h3>
              <ul>
                {order.items.map((item) => (
                  <li key={item.productId}>
                    <p>{item.name} - Quantity: {item.quantity} - Price: ${item.price.toFixed(2)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  );
};

export default MyOrders;