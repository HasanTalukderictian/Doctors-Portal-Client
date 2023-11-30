import React, { useEffect, useState } from 'react';

const ShowAllDoctor = () => {
    const [doctors, setDoctors] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDoctors(data);
        })
    }, [])


    return (
        <div>
            <h2>Show all Doctors : {doctors.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
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
                                    <button  className="btn btn-warning">
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