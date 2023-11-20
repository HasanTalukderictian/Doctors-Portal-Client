import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext);


    const navOptions = <>

        <Link to='/'><li><a>Home</a></li></Link>
        <Link to='/about'><li><a>About</a></li></Link>
        <Link to='/appointment'><li><a>Appointment</a></li></Link>
        <Link><li><a>Reviews</a></li></Link>
        <Link><li><a>Contact Us</a></li></Link>
        
       

    </>

const handleLogOut =() => {
    logOut()
    .then( {})
    .then(error => {
       console.log(error)
    })
}

    return (
        <div className="navbar  bg-opacity-30 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                          {navOptions}
                </ul>
            </div>
            <div className="navbar-end">
            { user ? <>  <Link onClick={handleLogOut} className='btn btn-primary text-xl text-white'>LogOut</Link></> : <>  <Link to='/login' className='btn btn-primary text-xl text-white'>Login</Link></>}
            </div>
        </div>
    );
};

export default Navbar;