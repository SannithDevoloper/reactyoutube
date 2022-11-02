import { useContext } from "react";
import { store } from "../App";
const ComponentA=()=>{
    const [data]=useContext(store)
    return(
        <div className='card'>
                <div className='card-body'>
                componentA  {data}
                </div>
        </div>
    )
}
export default ComponentA