import { Fragment } from 'react';
import { Component } from 'react';
import './Components/home.css'

class Header extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
        keyword:''
      }
    }
    
   
     changeHandler=(e)=>{
    
        console.log(e.target.value);
        this.setState({keyword:e.target.value?e.target.value:'Search '});
        this.props.UserInput(e.target.value)
     

    }
    render(){

    
    return(
        <Fragment>
        <div className="h1">
            
            <center>
            <input type="text" onChange={this.changeHandler}/>
            <h1>{this.state.keyword} </h1>
            </center>
           
        </div>
        </Fragment>
    )
    }
}
export default Header