
import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './components/Home/home';
import Listing from './components/Listing/listing';
import Details from './components/Details/details';
import PlaceOrder from './components/Booking/placeOrder';
import ViewOrder from './components/Booking/viewOrder';


const App =() =>{
  return (
    <BrowserRouter>
        <Header/>
      <Route  exact path="/" component={Home}/>
      <Route path="/listing/:mealId" component={Listing}/>
      <Route path="/details" component={Details}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewOrder}/>  
            <Footer/>
            
    
           
          
          
            
        </BrowserRouter>
  )

  
}

export default App;
