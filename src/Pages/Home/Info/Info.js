import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../../assets/icons/clock.svg';
import loc from '../../../assets/icons/marker.svg';
import call from '../../../assets/icons/phone.svg';

const Info = () => {
    return (
        <div className='sm:grid grid-cols-1  lg:grid grid-cols-3 gap-6'>
            <InfoCart CardTitle="Opining Hours" bgClass="bg-warning" Description="10 am to 5 pm" img={clock}></InfoCart>
            <InfoCart CardTitle="Visit Our location" bgClass="bg-primary" Description="Dhaka Bangladesh"   img={loc}></InfoCart>
            <InfoCart CardTitle="Contact Us Now" bgClass="bg-success" Description="+880168712230"   img={call}></InfoCart>
        </div>
    );
};

export default Info;