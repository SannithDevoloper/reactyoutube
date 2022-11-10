import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';


const url = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id=";

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }
    setDataPerFilter=(data) =>{
        this.setState({restaurantList:data})
    }



    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                        <center>
                                <h2>Filters</h2>
                            </center>
                            
                           

                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                    
                </div>
            </>
        )
    }

    ///api calling  
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})} )
    }
}

export default Listing;