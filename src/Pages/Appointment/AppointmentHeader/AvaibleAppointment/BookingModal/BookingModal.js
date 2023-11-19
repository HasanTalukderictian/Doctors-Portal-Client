import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const BookingModal = ({ date: initialDate, treatment, closeModal  }) => {
    const { name, slots } = treatment;
    const [date, setDate] = useState(initialDate || new Date()); // Initialize with a default value

    useEffect(() => {
        setDate(initialDate || new Date()); // Update the date only if it's not undefined
    }, [initialDate]);

    if (!date) {
        // Handle the case where date is not available yet
        return null;
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
     
        const solt = form.slot.value;
        const name =form.name.value;
        const phone  = form.phone.value;
        const email = form.email.value;
        const data = {
            date:date,
            name,
            phone,
            email,
            solt
        }
        console.log(data);
        form.reset()
       
    }

  

    return (
        <div className='mx-4'>
            <dialog className='modal' id='Booking_modal'>
                <div className='modal-box'>
                    <h3 className='font-bold text-lg'> Bookings For: {name}</h3>
                    <button className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2' onClick={closeModal}>
                        ✕
                    </button>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-2 justify-items-center my-3'>
                        <input type='text' readOnly value={format(date, 'PP')} className='input input-bordered w-full max-w-xs' />
                        <select name='slot' className="select select-info w-full max-w-xs">
                            {
                                slots.map(slot=> <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input type='text'  name='name' placeholder='Full Name' className='input input-bordered w-full max-w-xs' />
                        <input type='phone' name='phone' placeholder='Phone Number' className='input input-bordered w-full max-w-xs' />
                        <input type='email' name='email' placeholder='Email' className='input input-bordered w-full max-w-xs' />
                        <input type='Submit' value='Submit' className='btn btn-warning w-full max-w-xs' />
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;