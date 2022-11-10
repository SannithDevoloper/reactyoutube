import React from 'react';
import Search from './search';
import QuickSearch from './quicksearch';

const Home = () => {
    return(
        <React.Fragment>
            <Search/>
            <QuickSearch/>
        </React.Fragment>
    )
}

export default Home;