import React from 'react';
import{Route,Routes,BrowserRouter} from 'react-router-dom';
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


const App =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/form' element={<ProductForm/>}/>
        <Route path='/myproducts' element={<MyProduct />} />
        <Route path='/form/:id' element={<ProductForm/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductView/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/add-address" element={<AddAddress />} />
        <Route path="/select-address" element={<SelectAddress />} /> 
        <Route path="/order-confirmation" element={<OrderConfirmation />} /> 


      </Routes>
    </BrowserRouter>
  )
}

export default App;