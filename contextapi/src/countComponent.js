import { useContext } from "react";
import { store } from "./App";
const Count=()=>{
    const [data]=useContext(store)
    return(
        <div className='card'>
                <div className='card-body'>
                <h3 className="card-title">{data.length}</h3> 
                </div>
        </div>
    )
}
export default Count