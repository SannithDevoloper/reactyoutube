// import React from 'react';
// import Login from './Components/login';
// import Signup from './Components/signup';
// import Home from './Components/home';
// import {Routes,Route,BrowserRouter} from 'react-router-dom';

import Count from "./count";
import IncDec from "./incdec";
import {useState} from 'react'
const App=()=>{
  const [data,setData] = useState(0)
  const funInc=()=>{
    setData(data+1);

}
const funDec=()=>{
  setData(data-1);

}
  return(
    <div>
      <Count Data={data}/>
      <IncDec funInc={funInc} funDec={funDec}/>
    
    </div>
     
        // <BrowserRouter>
        // <Routes>
        //   <Route path='/' element={<Login/>}/>
        //   <Route path='/signup' element={<Signup/>}/>
        //   <Route path='/home' element={<Home/>}/>
        // </Routes>
        // </BrowserRouter>
        
      
  )
}
export default App

