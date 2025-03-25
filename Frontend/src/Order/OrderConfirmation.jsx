import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './OrderConfirmation.css';

const OrderConfirmation = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const location = useLocation();
  const navigate = useNavigate();
  const { addressId } = location.state;

  useEffect(() => {
    fetchCartItems();
    fetchSelectedAddress();
    loadRazorpayScript();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get('https://ecommerce-follow-along-oeux.onrender.com/cart/items');
      setCartItems(response.data);
      calculateTotalPrice(response.data);
    } catch (error) {
      console.error('Error fetching cart items', error);
    }
  };

  const fetchSelectedAddress = async () => {
    try {
      const response = await axios.post('https://ecommerce-follow-along-oeux.onrender.com/api/profile/addresses', {
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
    console.log("Cart", cartItems);
    try {
      await axios.post('https://ecommerce-follow-along-oeux.onrender.com/api/orders', {
        userEmail: localStorage.getItem('userEmail'),
        items: cartItems,
        totalPrice,
        address: selectedAddress,
        paymentMethod
      });

      alert('Order placed successfully');
      navigate('/my-orders', { state: { orderData: { total: totalPrice } } });
    } catch (error) {
      console.error('Error placing order', error);
    }
  };

  const loadRazorpayScript = () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  };

  const handleRazorpayPayment = async () => {
    try {
      const response = await axios.post('https://ecommerce-follow-along-oeux.onrender.com/api/checkout', {
        total: totalPrice,
      });

      const { id, amount, currency } = response.data.order;

      const options = {
        key: import.meta.env.VITE_RAZORPAY_ID_KEY,
        amount,
        currency,
        name: 'Watch Loft',
        description: 'Order Payment',
        order_id: id,
        handler: async (response) => {
          alert('Payment successful');
          handlePlaceOrder();
        },
        prefill: {
          name: 'Your Name',
          email: 'your.email@example.com',
          contact: '9999999999'
        },
        theme: {
          color: '#3399cc'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error('Error creating Razorpay order', error);
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
                <img src={`https://ecommerce-follow-along-oeux.onrender.com${item.image}`} alt={item.name} className="order-item-image" />
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
        <div className="payment-method">
          <h2>Payment Method</h2>
          <div className="payment-options">
            <label className="payment-option">
              <input
              className='radio'
                type="radio"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
              />
              <span className='method2'>Cash on Delivery (COD)</span>
            </label>
            <label className="payment-option">
              <input
              className='but'
                type="radio"
                value="Online"
                checked={paymentMethod === 'Online'}
                onChange={() => setPaymentMethod('Online')}
              />
              <span className='method'>Online Payment</span>
            </label>
          </div>
        </div>
        <div className="button-container">
          {paymentMethod === 'Online' && (
            <button onClick={handleRazorpayPayment} className="razorpay-button">
              Pay with Razorpay
            </button>
          )}
          {paymentMethod === 'COD' && (
            <button className="place-order-button" onClick={handlePlaceOrder}>
              Place Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
