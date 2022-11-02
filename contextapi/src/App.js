
import Display from "./displayComponent";
import Count from "./countComponent";
import { useState } from "react";
import { createContext } from "react";
 export const store=createContext()
function App() {
  
  const [data,setData]=useState([
    {
      brandName:"Nokia"
    },
    {
      brandName:'LG'
    },
    {
      brandName:'Google'
    }
  ]);
 
  
  return (
    <store.Provider value={[data,setData]}>
      <center>
      <h1> hello</h1>
      <Count/>
      <Display/>
    
      
      </center>
    </store.Provider>
    
     
  )
}

export default App;
