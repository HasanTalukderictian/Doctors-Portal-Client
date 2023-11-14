import React from 'react';

const TestimonialCard = ({ review }) => {

    const { img, name, reviews, location } = review;

    return (
        <div className="card card-compact lg:max-w-lg bg-base-100 shadow-xl my-6">

            <div className="card-body">
                <h2 className="text-center text-4xl">{name}</h2>
            
                <div className='flex'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='' /> 
                          
                        </div>
                    </div>
                     <div>
                     <p className='mx-2'>{reviews}</p>
                     <p className='mx-2 text-bold'>{location}</p>
                     </div>
                    
                </div>
                

            </div>
        </div>
    );
};

export default TestimonialCard;