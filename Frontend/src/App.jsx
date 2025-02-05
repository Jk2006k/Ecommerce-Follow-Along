import React from 'react';
import{Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Homepage from './Homepage/Homepage';
import ProductForm from './Form/Form';
const App =()=>{
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/form' element={<ProductForm/>}/>
      </Routes>
    </BrowserRouter>
  )

}

export default App;