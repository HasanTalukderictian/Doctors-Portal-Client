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
                <p>{specialist}</p>
                <p>{visiting_time}</p>
                <p className='text-violet-700'>Visitng Price: {price}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default DoctorCart;