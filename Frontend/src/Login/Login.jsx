import React, { useState } from 'react';
import './login.css';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';  
import { useDispatch } from 'react-redux';
import { setUserEmail } from '../store/userActions';
import axios from 'axios';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmailInput] = useState('');
  const [password, setPasswordInput] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState); 
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/login', { email, password }, {withCredentials: true});
      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('email', email);
        dispatch(setUserEmail(email));
        navigate('/profile');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>

        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            placeholder='Enter email'
          />
        </div>
        
        <div className="input-group">
          <label>Password</label>
          <div className='passcon'>
            <input
                type={isPasswordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPasswordInput(e.target.value)}
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
