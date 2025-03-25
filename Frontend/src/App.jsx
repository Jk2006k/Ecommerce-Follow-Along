import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage';
import ProductForm from './Form/Form';
import MyProduct from './myProduct/myProduct';
import Cart from './Mycart/cart';
import ProductView from './View/ProductView';
import Profile from './View/Profile';
import AddAddress from './View/AddAddress';
import SelectAddress from './Mycart/selectAddress';
import OrderConfirmation from './Order/OrderConfirmation';
import MyOrders from './Order/MyOrders';
import Payment from './Order/Payment';
import { useSelector } from 'react-redux';

const App = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Homepage />} />
        <Route path='/form' element={email ? <ProductForm /> : <Login />} />
        <Route path='/myproducts' element={email ? <MyProduct /> : <Login />} />
        <Route path='/form/:id' element={email ? <ProductForm /> : <Login />} />
        <Route path='/cart' element={email ? <Cart /> : <Login />} />
        <Route path="/product/:id" element={<ProductView />} />
        <Route path="/profile" element={email ? <Profile /> : <Login />} />
        <Route path="/add-address" element={email ? <AddAddress /> : <Login />} />
        <Route path="/select-address" element={email ? <SelectAddress /> : <Login />} />
        <Route path="/order-confirmation" element={email ? <OrderConfirmation /> : <Login />} />
        <Route path="/my-orders" element={email ? <MyOrders /> : <Login />} />
        <Route path='/payment' element={email ? <Payment /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

