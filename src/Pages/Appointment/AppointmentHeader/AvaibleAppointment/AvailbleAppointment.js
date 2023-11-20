import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvaiableCart from './AvaiableCart';
import BookingModal from './BookingModal/BookingModal';
import { useQuery } from 'react-query';


const AvailbleAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] =useState(null);
    const formattedDate = format(date, "PP");
    

    const {data: services, isLoading, refetch} = useQuery(['available',formattedDate ], ()=> 
    fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }

           


    return (
        <div>
            <h2 className='text-xl text-secondary text-center my-5'>Available Appointments on  {format(date, 'PP')}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 wrap gap-6 my-4'>
                {
                    services?.map(service => <AvaiableCart
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                   >

                    </AvaiableCart>)
                }
            </div>
       
            {   
            
                treatment && <BookingModal   date={date} treatment={treatment} 
                setTreatment={setTreatment} refetch={refetch}></BookingModal>
            }
        </div>
    );
};

export default AvailbleAppointment;