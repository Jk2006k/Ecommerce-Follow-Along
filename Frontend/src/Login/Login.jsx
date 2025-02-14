import React, { useState } from 'react';
import './login.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';  

const Login = () => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({ 
    email: '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle password visibility
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userEmail', formData.email);
        localStorage.setItem('authToken', data.token);
        console.log("Successfully Logged In");
        navigate('/'); 
      } else {
        setErrorMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Signup before Login In",error)
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder='Enter email'
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <div className='passcon'>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder='Enter strong password'
            />
            <button
                type="button"
                onClick={togglePasswordVisibility}
                className="toggle-password-btn"
            >
              {isPasswordVisible ? <AiOutlineEye/>: <AiOutlineEyeInvisible/>} 
            </button>
          </div>
        </div>

        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
