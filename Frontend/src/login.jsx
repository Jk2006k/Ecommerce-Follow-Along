import React , { useState } from 'react';
import './login.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [formData, setFormData] = useState({ 
    email: '',
    password: '',
  })
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 

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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        
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
                
                >{isPasswordVisible ? <AiOutlineEye/>: <AiOutlineEyeInvisible/>} {/* Toggle text */} </button>
          </div>
        </div>
        <button type="submit" className="submit-btn">Login</button>
      </form>
    </div>
  );
}



export default Login;
   

