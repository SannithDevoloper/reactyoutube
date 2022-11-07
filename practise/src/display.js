import './display.css'
const Display=(props)=>{
    const rendeProduct=props.Data.map((item)=>{
        return(
            <div className="card" key={item.id}>
                <img src={item.image} alt={item.name}/>
                <div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p>{item.cost}</p>

                </div>
                
            </div>
        )
    })
   
    
    return(
        <div className='main'> {rendeProduct}</div>
          
        
    )
}
export default Display