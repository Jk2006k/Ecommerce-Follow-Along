import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import "./Payment.css"; // Import the new CSS file

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [orderData, setOrderData] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("COD");

  useEffect(() => {
    if (location.state && location.state.orderData) {
      setOrderData(location.state.orderData);
    } else {
      navigate("/cart");
    }
  }, [location.state, navigate]);

  const handlePayment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/checkout",
        { total: orderData.total },
        {
          headers: {
            Authorization: "Bearer " + sessionStorage.getItem("token"),
          },
        }
      );

      const options = {
        key: process.env.RAZORPAY_ID_KEY,
        amount: data.order.amount,
        currency: "INR",
        name: "Electroop",
        description: "Test Payment",
        order_id: data.order.id,
        handler: async function (response) {
          console.log(response);
          alert("Payment Successful");
          navigate("/my-orders");
        },
        prefill: {
          name: "Admin",
          email: "test@example.com",
          contact: "8248777476",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };

  const handleConfirm = () => {
    if (paymentMethod === "COD") {
      alert("Order confirmed with Cash on Delivery.");
      navigate("/my-orders");
    } else if (paymentMethod === "ONLINE") {
      handlePayment();
    }
  };

  if (!orderData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Navbar />
      <div className="payment-container">
        <div className="payment-card">
          <h2 className="payment-header">Payment</h2>
          <p className="payment-info">
            <strong>Order ID:</strong> {orderData._id}
          </p>
          <p className="payment-info">
            <strong>Date:</strong> {new Date(orderData.createdAt).toLocaleDateString()}
          </p>

          <h3 className="section-title">Delivery Address</h3>
          <p className="payment-info">{orderData.address?.address1}</p>
          {orderData.address?.address2 && <p className="payment-info">{orderData.address.address2}</p>}
          <p className="payment-info">
            {orderData.address?.city} - {orderData.address?.zipCode}
          </p>

          <h3 className="section-title">Order Details</h3>
          <p className="payment-info">
            <strong>Total Amount:</strong> ${orderData.total}
          </p>

          <h3 className="section-title">Products:</h3>
          <ul className="product-list">
            {orderData.products.length > 0 ? (
              orderData.products.map((item, index) => (
                <li className="product-item" key={index}>
                  <img
                    className="product-image"
                    src={`http://localhost:3000/uploads/${item.imageUrl}`}
                    alt={item.name}
                  />
                  {item.name} - ${item.price}
                </li>
              ))
            ) : (
              <p className="message">No products found in this order.</p>
            )}
          </ul>

          <h3 className="section-title">Select Payment Method</h3>
          <div className="radio-container">
            <label className="radio-label">
              <input
                type="radio"
                name="payment"
                value="COD"
                checked={paymentMethod === "COD"}
                onChange={() => setPaymentMethod("COD")}
              />
              <span className="radio-text">Cash on Delivery (COD)</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="payment"
                value="ONLINE"
                checked={paymentMethod === "ONLINE"}
                onChange={() => setPaymentMethod("ONLINE")}
              />
              <span className="radio-text">Pay with Razorpay</span>
            </label>
          </div>

          <button className="payment-button" onClick={handleConfirm}>Confirm Payment</button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
