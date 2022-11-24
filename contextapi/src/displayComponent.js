import { useContext,useState } from "react";
import { store } from "./App";
const Display=()=>{
    const [data,setData]=useContext(store)
    const [name,setName]=useState('')
    const submitHandler=e=>{
        e.preventDefault();
        setData([...data,{brandName:name}])
    }
    const deleteHandler=(e,{brandName})=>{
        e.preventDefault();
        const newList=data.filter((item)=>item.brandName!== brandName)
        setData(newList)

       
    }
    return(
        <div className='card'>
                <div className='card-body'>
                {data.map((items)=><h3 className="card-title">{items.brandName}   <button onClick={deleteHandler}>delete</button></h3>)}
             
                <form className="form" onSubmit={submitHandler}>
                    <input type="text" onChange={(e)=>setName(e.target.value)}/>
                    <input type="submit" value='add' />
                </form>
    
                
                </div>
        </div>
    )
}
export default Display