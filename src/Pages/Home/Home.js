import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import clock from '../../../src/assets/icons/clock.svg';


const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Info img={clock}></Info>
        </div>
    );
};

export default Home;