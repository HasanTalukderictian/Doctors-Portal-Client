import React from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonal from './Testimonial/Testimonal';



const Home = () => {
    return (
        <div>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Dental></Dental>
         <MakeAppointment></MakeAppointment>
         <Testimonal></Testimonal>

        </div>
    );
};

export default Home;