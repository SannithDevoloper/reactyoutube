import Header from "./header"
import Display from "./display"

import Footer from "./footer"
import JSON from './Components/db.json'
 import {useState} from 'react'
 

const App=()=>{
  const [data,setData]=useState(
    {
      prodData:JSON,
      filterdData: JSON,
    }
  )
  const filterData=(keyword)=>{
    let output = data.prodData.filter((data)=>{
      return  (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
    })
    setData({filterdData:output})


  }
 
  return(
    <div >
      {/* <Header UserInput={(data)=>console.log('inside home',data)}/> */}
      <Header UserInput={(data)=>filterData(data)}/>
      <Display Data={data.filterdData}/>
      
      <Footer/>
    
    
    </div>
     
        
      
  )
}
export default App

