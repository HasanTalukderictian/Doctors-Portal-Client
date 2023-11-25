import React from 'react';

const DoctorCart = ({ doctor }) => {
    const { doctorimg, name, specialist, visiting_time, price } = doctor;
    const imageWidth = '100%';

    return (
        <div className="card card-compact bg-base-100 shadow-xl flex items-center">
            <div className="w-1/2 text-center">
                <figure>
                    <img src={doctorimg} className="rounded my-2 mx-auto" style={{ width: imageWidth }} alt="Doctor" />
                </figure>
            </div>
            <div className="w-1/2 text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl my-2'>Specialist:{specialist}</p>
                <p className='text-xl my-2'>{visiting_time}</p>
                <p className='text-violet-700 my-2'>Visiting Price: {price}</p>
               
                  <div className='p-3'>
                  <button className="btn btn-primary p-2">Get Appointment</button>
                    </div>  
               
            </div>
        </div>
    );
};

export default DoctorCart;