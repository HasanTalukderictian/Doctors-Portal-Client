import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Dental></Dental>

        </div>
    );
};

export default Home;