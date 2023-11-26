import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
const AllUsers = () => {
    const { user } = useContext(AuthContext);
    const { email: currentUserEmail } = user;
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allusers', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctors-portal')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            setUsers(data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    const makeAdmin = (email, role) => {
        if (role === 'admin') {
            // Do not allow making an existing admin as admin again
            Swal.fire({
                icon: 'info',
                title: 'Info',
                text: 'This user is already an admin.',
            });
            return;
        }

        fetch(`http://localhost:5000/users/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('doctors-portal')}`,
            },
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data && data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Make Admin Successfully',
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Update the users array to reflect the admin change
                setUsers(prevUsers => {
                    return prevUsers.map(user => {
                        if (user.email === email) {
                            return { ...user, role: 'admin' };
                        }
                        return user;
                    });
                });
            }
        })
        .catch((error) => {
            console.error('Error making admin:', error);
        });
    };

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
                                <td>
                                    <button
                                        onClick={() => makeAdmin(item.email, item.role)}
                                        className="btn btn-outline btn-sm"
                                        disabled={item.role === 'admin'}
                                    >
                                        Make Admin
                                    </button>
                                </td>
                                <td><button className="btn btn-outline btn-sm">Remove User</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;