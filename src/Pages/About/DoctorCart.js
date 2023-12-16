import React from 'react';

const DoctorCart = ({ doctor }) => {
    const { _id,doctorimg, name, specialist, visiting_time, price } = doctor;
    const imageWidth = '150px';
    
    
   const handleDoctor = _id => {
  console.log(_id);
  fetch(`http://localhost:5000/doctors/${_id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error("Error fetching doctor:", error);
    });
};

    return (
        <div className="card card-compact bg-base-100 shadow-xl flex items-center">
            <div className=" text-center">
                <figure>
                    <img src={doctorimg} className="rounded my-2 mx-auto" style={{ width: imageWidth }} alt="Doctor" />
                </figure>
            </div>
            <div className="text-center">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl my-2'>Specialist:{specialist}</p>
                <p className='text-xl my-2'>{visiting_time}</p>
                <p className='text-violet-700 my-2'>Visiting Price: {price}</p>
               
                  <div className='p-3'>
                  <button onClick={() => handleDoctor(_id)} className="btn btn-primary p-2">Get Appointment</button>
                    </div>  
               
            </div>
        </div>
    );
};

export default DoctorCart;