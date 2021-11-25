import React from 'react';
import About from '../../About/About';
import Banner from '../../Banner/Banner';

import Services from '../../Services/Services';
import Spacialists from '../Services/Service/Spacialists/Spacialists';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            
            <Services></Services>
            
        </div>
    );
};

export default Home;