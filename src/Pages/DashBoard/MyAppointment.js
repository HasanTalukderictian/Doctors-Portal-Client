import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyAppointment = () => {
    const [appointment, setAppointment] = useState([]);
    const { user } = useContext(AuthContext);
    console.log(user);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                if (user) {
                    const response = await fetch(`http://localhost:5000/booking?email=${user?.email}`);
                    const data = await response.json();
                    setAppointment(data);
                }
            } catch (error) {
                console.error('Error fetching appointments:', error);
            }
        };

        fetchAppointments();
    }, [user]);


    return (
        <div> 
             <h2>My Appointment {appointment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
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
                        {/* row 1 */}
                        {appointment.map(item => <tr className="bg-base-200">
                            <th>1</th>
                            <td>{item.patient}</td>
                            <td>{item.date}</td>
                            <td>{item.solt}</td>
                            <td>{item.treatName}</td>
                            <td><button className='btn btn-warning'>Delete</button></td>
                        </tr>)}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;