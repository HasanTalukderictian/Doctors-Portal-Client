import { format } from 'date-fns';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../../../AuthProvider/AuthProvider';

const BookingModal = ({ date: initialDate, treatment, closeModal }) => {
    const { name, slots, _id } = treatment;
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);


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
        const pname = form.pname.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const data = {
            date: date,
            patient: pname,
            phone,
            email,
            solt,
            treatmentId: _id,
            treatName: name,
        }


        form.reset()

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    throw new Error('Failed to add appointment');
                }
            })
       
            .then(data => {
                console.log(data);
                if (data.sucess) {

                    alert(`You have get  a appointment ${solt}` )


                }
                else {
                    alert("You have already a appointment")
                }

            })
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
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }

                        </select>
                        <input type='text' defaultValue={user?.name} name='pname' placeholder='Full Name' className='input input-bordered w-full max-w-xs' />
                        <input type='phone' name='phone' placeholder='Phone Number' className='input input-bordered w-full max-w-xs' />
                        <input type='email' name='email' placeholder='Email' readOnly defaultValue={user?.email} className='input input-bordered w-full max-w-xs' />
                        <input type='Submit' value='Submit' className='btn btn-warning w-full max-w-xs' />
                    </form>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;