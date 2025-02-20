import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './SelectAddress.css';

const SelectAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/profile/addresses', {
        userEmail: localStorage.getItem('userEmail')
      });
      setAddresses(response.data.addresses);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleSelectAddress = (addressId) => {
    navigate('/order-confirmation', { state: { addressId } });
  };

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>
        <div className='nav'><Navbar /></div>
      </div>
      <div className="select-address-container">
        <h1 className='select-address-heading'>Select Address</h1>
        {addresses.length > 0 ? (
          addresses.map((address) => (
            <div key={address._id} className="address-item">
              <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.state}, {address.pincode}</p>
              <button onClick={() => handleSelectAddress(address._id)} className="select-button">Select</button>
            </div>
          ))
        ) : (
          <p>No addresses found Add address in profile page</p>
        )}
      </div>
    </div>
  );
};

export default SelectAddress;

