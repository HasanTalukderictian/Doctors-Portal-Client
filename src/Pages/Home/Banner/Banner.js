import React from 'react';
import image from '../../../assets/images/chair.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse px-10">
          <img src={image} className="sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts <br /> Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-[#1CDE43] text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;