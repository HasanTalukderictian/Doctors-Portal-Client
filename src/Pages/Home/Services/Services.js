import React from 'react';
import ServiceCart from './ServiceCart';
import Cavity from '../../../assets/images/cavity.png';
import Fluroide from '../../../assets/images/fluoride.png';
import whiteing from '../../../assets/images/whitening.png';

const Services = () => {
    return (
        <div className='my-10'>
              <div className=' my-2'>
              <h2 className='text-xl text-primary text-center'>Our Services</h2>
              <h2 className='text-4xl font-semibold text-center text-orange-600'>Services We Provide</h2>
              </div>
              <div className='sm:grid grid-cols-1  lg:grid grid-cols-3 gap-6 my-6'>
              <ServiceCart img={Cavity} classTitle='Fluoride Treatment' ></ServiceCart>
              <ServiceCart img={Fluroide} classTitle='Cavity Filling' ></ServiceCart>
              <ServiceCart  img={whiteing} classTitle='Teeth Whitening'></ServiceCart>
              </div>
              
        </div>
    );
};

export default Services;