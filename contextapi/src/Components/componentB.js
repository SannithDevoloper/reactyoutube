import { useContext } from "react";
import { store } from "../App";
const ComponentB=()=>{
    const [data]=useContext(store)
    return(
        <div className='card'>
        <div className='card-body'>
        componentB  {data}
        </div>
</div>
    )
}
export default ComponentB