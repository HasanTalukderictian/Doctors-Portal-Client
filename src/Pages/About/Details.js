import React from 'react';
import Doctor from '../../../src/assets/Doctor (2).jpg';

const Details = () => {
    return (
        <div>
            <section className='lg:flex justify-items-center md:flex sm:grid my-4 border rounded bg-base-200'>
            <div className='my-4 w-1/2 mx-2 '>
                <img className='rounded-lg px-1' src={Doctor} alt="" srcset="" />
            </div>
            <div className='w-1/2 my-10 '>
                <h3 className='  text-center text-3xl font-semibold'>We are Provide <span className='text-3xl text-orange-500'>Best Treatment</span></h3>
                <div className='my-4 mx-4'>
                    <p className='text-xl '>
                        Welcome to Doctors Portal, where compassionate care meets cutting-edge medical expertise. As a leading healthcare institution, we are dedicated to providing exceptional and personalized healthcare services to our community. Our commitment to excellence is reflected in our state-of-the-art facilities, a team of highly skilled medical professionals, and a patient-centered approach.

                        At Doctors Portal, we prioritize your health and well-being. From routine check-ups to specialized treatments, our comprehensive range of medical services is designed to meet the diverse needs of our patients. We embrace a holistic approach to healthcare, focusing not only on curing ailments but also on promoting overall wellness.
                      
                    </p>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Details;