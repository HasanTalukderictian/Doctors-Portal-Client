import React, { useEffect, useState } from 'react';
import quate from '../../../assets/icons/quote.svg';
import TestimonialCard from './TestimonialCard';

const Testimonal = () => {
     
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('http://localhost:5000/review')
        .then(res => res.json())
        .then(data => {
             console.log(data);
            setReviews(data)
        })
    },[])
   

    return (
        <section className='my-20'>
            <div className='flex justify-between'>
                <div>
                    <h2 className='text-xl font-bold text-primary'>Testimonial</h2>
                    <h2 className='my-2 text-4xl font-semibold'>What Our Patients Says</h2>
                </div>
                <div>
                   <img src={quate} className='lg:w-38 sm:w-24' alt="" />
                </div>
            </div>
            <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-4'>
                 {
                    reviews.map(review=> <TestimonialCard
                      key={review._id}
                      review={review}>

                    </TestimonialCard>)
                 }
            </div>
        </section>
    );
};

export default Testimonal;