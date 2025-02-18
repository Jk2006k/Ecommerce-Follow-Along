import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './AddAddress.css';

const AddAddress = () => {
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/profile/address', {
        userEmail: localStorage.getItem('userEmail'),
        address: {
          addressLine1,
          addressLine2,
          city,
          state,
          pincode
        }
      });
      alert('Address added successfully');
      navigate('/profile');
    } catch (error) {
      console.error('Error adding address:', error);
    }
  };

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>
        <div className='nav'><Navbar /></div>
      </div>
      <div className="add-address-container">
        <h1 className='add-address-heading'>Add Address</h1>
        <form onSubmit={handleSubmit} className="add-address-form">
          <input
            type="text"
            value={addressLine1}
            onChange={(e) => setAddressLine1(e.target.value)}
            placeholder="Address Line 1"
            required
          />
          <input
            type="text"
            value={addressLine2}
            onChange={(e) => setAddressLine2(e.target.value)}
            placeholder="Address Line 2"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
            required
          />
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="State"
            required
          />
          <input
            type="text"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            placeholder="Pincode"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddAddress;