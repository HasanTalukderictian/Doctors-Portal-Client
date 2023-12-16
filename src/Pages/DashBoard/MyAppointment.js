import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
;

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const { user } = useContext(AuthContext);
   


    useEffect(() => {
    
            const url = `http://localhost:5000/booking?email=${user?.email}`;
           fetch(url, {
                        method: 'GET',
                        headers: {
                            authorization: `Bearer ${localStorage.getItem('doctors-portal')}`
                        }
                    })
                    .then(res => res.json() )
                    .then(data => {
                        // console.log(data);
                        setAppointments(data);
                    })
                  
        
                   
             
     
    }, [user]);

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${item._id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            // Remove the deleted item from the UI
                            setAppointments((prevAppointments) =>
                                prevAppointments.filter((appointment) => appointment._id !== item._id)
                            );

                            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
                        } else {
                            // Show an error message if deletion was not successful
                            Swal.fire('Error!', 'Failed to delete the appointment.', 'error');
                        }
                    })
                    .catch((error) => {
                        console.error('Error deleting appointment:', error);
                        Swal.fire('Error!', 'Failed to delete the appointment.', 'error');
                    });
            }
        });
    };

    return (
        <div>
            <h2>My Appointments {appointments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((item, index) => (
                            <tr className="bg-base-200" key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.patient}</td>
                                <td>{item.date}</td>
                                <td>{item.solt}</td>
                                <td>{item.treatName}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-warning">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;