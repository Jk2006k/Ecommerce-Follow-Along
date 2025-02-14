// import React, { useState, useEffect } from 'react';
// import Card from '../Homepage/productCard';

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
//     setCart(storedCart);
//   }, []);

//   return (
//     <div className="cart-page">
//       <h1>My Cart</h1>
//       {cart.length === 0 ? <p>Your cart is empty.</p> : (
//         <div className="cart-grid">
//           {cart.map((product, index) => (
//             <Card key={index} {...product} showActions={false} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
