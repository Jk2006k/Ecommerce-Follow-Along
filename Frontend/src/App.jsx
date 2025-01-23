import React from 'react';
import{Route,Routes,BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
const App =()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      
      </Routes>
      </BrowserRouter>
    
  )

}

export default App;