import React, { useState } from "react";
import './Signup.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
    imagePreview: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
        setFormData({ ...formData, image: file, imagePreview: formData.image });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('file', formData.image);
    console.log("Form Data Submitted:", formDataToSend);
    try {
      const res = await axios.post('http://localhost:3000/api/signup', formDataToSend);
      console.log('User created successfully');
      navigate('/login');
    } catch (error) {
      console.log('Error in submitting the form', error.message);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
          />
        </div>
        {formData.imagePreview && (
          <div className="image-preview">
            <img
              src={formData.imagePreview}
              alt="Preview"
              className="preview-img"
            />
          </div>
        )}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
