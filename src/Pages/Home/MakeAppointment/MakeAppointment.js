import React from 'react';
import Doctor from '../../../assets/images/doctor-small.png';
import Appointment from '../../../assets/images/appointment.png';
import { Link } from 'react-router-dom';


const MakeAppointment = () => {
    return (
        <section 
        style={{background: `url(${Appointment})`}} className='lg:flex sm:grid my-10'>
             <div className='w-1/2 hidden lg:block p-4'>
                <img className='mt-[-100px]' src={Doctor} alt="" />
             </div>
             <div className='my-4 mx-4 p-3 w-1/2 p-4'>
                 <p className='text-xl text-primary my-2'>Appointment</p>
                 <h2 className='text-3xl font-bold text-white my-2'>Make an appointment Today</h2>
                 <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                 <Link to='/appointment' className="btn btn-success my-2">Get a Started</Link>
             </div>
        </section>
    );
};

export default MakeAppointment;