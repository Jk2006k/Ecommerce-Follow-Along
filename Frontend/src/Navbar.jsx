import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail } from './store/userActions';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const email = useSelector((state) => state.user.email);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('authToken');
    const storedEmail = localStorage.getItem('email');
    if (token && storedEmail) {
      dispatch(setUserEmail(storedEmail));
    }
  }, [dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('email');
    dispatch(setUserEmail(''));
    navigate('/');
  };

  return (
    <NavbarContainer>
      <Links className={isOpen ? 'open' : ''}>
        <Link to={'/'}> <p>Home</p> </Link>
        {!email && <Link to={'/signup'}>Signup</Link>}
        {email && (
          <>
            <Link to={'/profile'}><i className="fa-regular fa-user"></i></Link>
            <Link to={'/form'}> <p>Add Product</p> </Link>
            <Link to={`/myproducts`}> <p>My Products</p> </Link>
            <Link to={'/cart'}> <p>Cart</p> </Link>
            <Link to={'/my-orders'}>My Order</Link>
            <Link to={'/'} onClick={handleLogout}>Logout</Link>
          </>
        )}
      </Links>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid black;

  a {
    text-decoration: none;
    color: black;
    font-size: 18px;
  }

  a i {
    font-size: 22px;
    color: black;
    transition: color 0.3s ease, transform 0.2s ease;
  }

  a i:hover {
    color: #007bff;
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    .responsive {
      display: flex;
      gap: 30px;
      align-items: center;
      width: 100%;
    }
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
    align-items: center;
    display: none;

    &.open {
      display: flex;
    }
  }
`;

const ProfileIcon = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: black;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #007bff;
    transform: scale(1.1);
  }
`;
