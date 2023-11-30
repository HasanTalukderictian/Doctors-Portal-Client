import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ShowAllDoctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => {
               
                setDoctors(data);
            })
    }, [])

    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/doctors/${item._id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then(data => {
                       
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Doctor has been Deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }


    return (
        <div>
            <h2>Show all Doctors : {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className='text-xl'>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctors.map((item, index) => (
                            <tr className="bg-base-200" key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.specialist}</td>
                                <td>{item.visiting_time}</td>


                                <td>
                                    <button className="btn btn-success">
                                        Update
                                    </button>
                                </td>
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

export default ShowAllDoctor;