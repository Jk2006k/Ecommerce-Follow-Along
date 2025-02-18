    import React, { useState } from 'react'
    import { Link } from 'react-router-dom'
    import styled from 'styled-components'
    // import { FaBars, FaTimes } from 'react-icons/fa';
    import '@fortawesome/fontawesome-free/css/all.min.css';
    
    
    const Navbar = () => {
        const [isOpen, setIsOpen] = useState(false)

        const toggleMenu = () => {
            setIsOpen(!isOpen)
        }

        return (
            <NavbarContainer>
                <Links className={isOpen ? 'open' : ''}>
                    <Link to={'/profile'}><i className="fa-regular fa-user"></i></Link>
                    <Link to={'/'}> <p>Home</p> </Link>
                    <Link to={'/form'}> <p>Add Product</p> </Link>
                    <Link to={`/myproducts`}> <p>My Products</p> </Link>
                    <Link to={'/cart'}> <p>Cart</p> </Link>

                </Links>
            </NavbarContainer>
        )
    }

    export default Navbar

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
