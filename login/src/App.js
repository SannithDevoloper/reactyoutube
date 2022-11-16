import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from './components/login';
import Register from './components/register';
import Profile from './components/profile';
import ViewUser from './components/userList';

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/users" component={ViewUser}/>
            <Footer/>
        </BrowserRouter>
    )
}


export default App
