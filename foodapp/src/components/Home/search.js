import React,{Component} from 'react';
import './search.css';
const lurl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="

class Search extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         location:'',
         restData:''
      }
    }
     rendercity=(data)=>{
        if(data)
        {
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }

    }
    renderRest=(data)=>{
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item._id}>
                    {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }

    }

    handleCity = (event) => {
        let stateId = event.target.value;
        fetch(`${restUrl}${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({restData:data}) })
    }
    

 

    
    render(){
    
        
        return(
            <div id="search">
                <div className="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Find Best Place Near You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>----SELECT LOCATION----</option>
                       {this.rendercity(this.state.location)}
                        
                    </select>
                    <select id="restSelect">
                        <option>----SELECT Restaurants----</option>
                        {this.renderRest(this.state.restData)}
                        
                    </select>
                </div>
            </div>
        )
    
}
componentDidMount(){
    //console.log(">>>>inside componentDidMount")
    fetch(lurl,{method:'GET'})
    // return promise
    .then((res) => res.json())
    // return data
    .then((data) => {
        console.log(data)
        this.setState({location:data})
    })
    .catch((err) => {
        console.log(err)
    })

}
}

export default Search;