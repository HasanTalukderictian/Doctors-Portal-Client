import React, { useContext } from 'react';
import Banner from './Banner/Banner';
import Info from './Info/Info';
import Services from './Services/Services';
import Dental from './Dental/Dental';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Testimonal from './Testimonial/Testimonal';
import Contact from './ContactUs/Contact';
import Footer from '../Shared/Navbar/Footer/Footer';
import { AuthContext } from '../../AuthProvider/AuthProvider';



const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
         <Banner></Banner>
         <Info></Info>
         <Services></Services>
         <Dental></Dental>
         <MakeAppointment></MakeAppointment>
         <Testimonal></Testimonal>
         {user ?  <Contact></Contact> :<></>}
         <Footer></Footer>

        </div>
    );
};

export default Home;