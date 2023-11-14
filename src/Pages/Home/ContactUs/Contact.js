import React from 'react';
import background from '../../../assets/images/appointment.png';

const Contact = () => {
    return (
        <section className='w-full lg:max-h-fit p-4' style={{ background: `url(${background})` }}>
            <div className='my-10'>
                <h2 className='text-center text-primary my-5 text-xl'>Contact us</h2>
                <h2 className='text-4xl font-semibold my-2 text-center text-white'>Stay connected with us</h2>
                <div className='grid grid-cols-1 gap-4 mx-auto lg:max-w-lg md:max-w-md sm:max-w-sm'>
                    <input type="text" placeholder="Email Address" className="input input-bordered lg:max-w-lg md:max-w-md sm:max-w-sm" />
                    <input type="text" placeholder="Subject" className="input input-bordered lg:max-w-lg md:max-w-md sm:max-w-sm" />
                    <input type="text" placeholder="Your Message" className="input input-bordered input-success lg:max-w-lg md:max-w-md sm:max-w-sm" />
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        </section>
    );
};

export default Contact;