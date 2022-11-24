import Header from "./header"
import Display from "./display"

import Footer from "./footer"
import JSON from './Components/db.json'
 import {useState} from 'react'
 

const App=(props)=>{
  const [data,setData]=useState(
    {
      prodData:JSON,
      filteredData:JSON,
    }
  )
  const filterData=(keyword)=>{
    
    let output = data.prodData.filter((item) => {
      return (item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
  })
  console.log("in filter",output)

  setData({filteredData:output})

  }
 
  return(
    <>
       <Header UserInput={(data)=>{filterData(data)}}/> 
      {/* <Header userInput={(data)=>{filterData(data)}}/> */}
      <Display Data={data.filteredData}/>
      
      <Footer/>
    
    
    </>
     
        
      
  )
}
export default App

