import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DoctorCart from './DoctorCart';

const OurDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/doctors')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDoctors(data);
      });
  }, []);

  // Settings for the react-slick carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of items to show at a time
    slidesToScroll: 3, // Number of items to scroll on arrow click
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='my-3'>
      <div className='my-8'>
        <h3 className='text-center text-4xl font-bold '>Our Specialist Doctors </h3>
        <p className='text-xl text-center my-2 text-lime-500'>Get Their Appointment</p>
        <p className='text-xl text-center my-2 text-lime-500'> Total Doctor : {doctors.length}</p>
      </div>

      <Slider {...settings} className='space-x-2 gap-6'>
        {doctors.map((doctor) => (
          <DoctorCart key={doctor._id} doctor={doctor}></DoctorCart>
        ))}
      </Slider>
    </div>
  );
};

export default OurDoctors;