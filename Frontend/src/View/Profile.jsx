import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import './Profile.css';
import { useSelector } from 'react-redux';

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);

  useEffect(() => {
    if (email) {
      fetchUserProfile();
    }
  }, [email]);

  const fetchUserProfile = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/profile', {
        userEmail: email
      });
      setUserData(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const handleAddAddress = () => {
    navigate('/add-address');
  };

  const handleRemoveAddress = async (addressId) => {
    try {
      const response = await axios.post('http://localhost:3000/api/profile/remove', {
        userEmail: email,
        addressId
      });
      setUserData(response.data.user);
      alert('Address removed successfully');
    } catch (error) {
      console.error('Error removing address:', error);
    }
  };

  if (!userData) {
    return <p>Please Signup/login</p>;
  }

  return (
    <div>
      <div className="topper">
        <h1 className="Heading">Watch Loft</h1>
        <div className='nav'><Navbar /></div>
      </div>
      <div className="profile-container">
        <h1 className='profile-heading'>Profile</h1>
        <p>Email: {email}</p>
        <div className="profile-section">
          <img src={`http://localhost:3000/uploads/${userData.img}`} alt="Profile" className="profile-photo" />
          <h2>{userData.name}</h2>
          <p>{userData.email}</p>
          <h2>Addresses</h2>
          {userData.addresses && userData.addresses.length > 0 ? (
            userData.addresses.map((address) => (
              <div key={address._id} className="address-item">
                <p>{address.addressLine1}, {address.addressLine2}, {address.city}, {address.state}, {address.pincode} {<button onClick={() => handleRemoveAddress(address._id)} className="remove-button">X</button>}</p>
              </div>
            ))
          ) : (
            <p>No addresses found</p>
          )}
          <button onClick={handleAddAddress}>Add Address</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;