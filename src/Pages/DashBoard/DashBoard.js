import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';




const DashBoard = () => {
    
    const { user } = useContext(AuthContext);
    const [admin ] = useAdmin(user);

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content mx-5 my-5 ">
                {/* Page content here */}
                <h2 className='text-3xl font-semibold text-lime-600'> Welcome to Your DashBoard</h2>
                <Outlet></Outlet>
              

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to="/dashboard/myappointment">My Appointments</Link></li>
                    <li><Link to="/dashboard/myreviews">My Reviews</Link></li>
                    { admin && <><li><Link to="/dashboard/allUsers">All Users</Link></li>
                    <li><Link to='/dashboard/AddNewDoctor'>Add New Doctor</Link></li>
                    <li><Link to='/dashboard/AllDoctors'>Show All Doctors</Link></li></>}
                </ul>

            </div>
        </div>
    );
};

export default DashBoard;