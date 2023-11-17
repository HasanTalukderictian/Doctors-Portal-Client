import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvaiableCart from './AvaiableCart';

const AvailbleAppointment = ({date}) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => {
            setServices(data);
            console.log(data);
        })
    },[])
    return (
        <div>
            <h2 className='text-xl text-secondary text-center mb-4'>Available Appointments on  {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 wrap gap-6 my-4'>
                {
                    services.map(service => <AvaiableCart
                    key={service._id}
                    service={service}>

                    </AvaiableCart>)
                }
            </div>
        </div>
    );
};

export default AvailbleAppointment;