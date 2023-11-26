import React, { useEffect, useState } from 'react';

const AllUsers = () => {
    
    const [users, setUsers] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/allusers')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setUsers(data);
        })
    },[])


    return (
        <div>
            <h2>Welcome to All Users {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            
                           
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((item, index) => (
                            <tr className="bg-base-200" key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.email}</td>
                                
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;