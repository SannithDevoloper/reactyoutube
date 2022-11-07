import './Components/home.css'
import { useState } from 'react'
const Header=(props)=>{
    const [data,setData]=useState({
        keyword:''
    })
    const changeHandler=(e)=>{
        setData({keyword:e.target.value?e.target.value:'Search '})
        props.UserInput(e.target.value)

    }
    return(
        <div className="h1">
            
            <center>
            <input id="input" onChange={changeHandler}/>
            <h1>{data.keywords} </h1>
            </center>
           
        </div>
    )
}
export default Header