import React from 'react';
import{Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage';
import ProductForm from './Form/Form';
import MyProduct from './myProduct/myProduct';
import Cart from './Mycart/cart';
import ProductView from './View/ProductView'; 

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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
