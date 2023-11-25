import React, { useContext } from 'react';
import Swal from 'sweetalert2';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';




const Login = () => {
      
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate();
    const location  = useLocation();
    const from = location.state?.from?.pathname || "/";



    const handleLogin =event => {
       
        

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const user  = {email, password}
        console.log(user);
        signIn(email, password)
        .then(result  => {
            const user  =  result.user;
            const loggedUser ={ email: user.email}

            // fetch('http://localhost:5000/users', {
            //     method: 'POST',
            //     headers: {
            //         'content-type': 'application/json',
            //     },
            //     body: JSON.stringify(loggedUser),
            // })
            // .then(res => res.json() )
            // .then(data => {
            //     console.log('Users created data :', data)
            // })
            

            
            fetch('http://localhost:5000/jwt', {
                method:"POST",
                headers: {
                    'content-type':'application/json'
                },
                body:JSON.stringify(loggedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log('jwt access token ',data);

                /// warning local storage is not the best 
                localStorage.setItem('doctors-portal', data.token);
                Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "User has been Created Successfully",
                        showConfirmButton: false,
                        timer: 2000
                      });
                      navigate(from, { replace: true });
            })

        })
        .then(error => {
            console.log(error)
        })
    }


    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left w-1/2">
                
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                        
                        <input type="submit"  className="btn text-xl text-white bg-[#ff3811]" value="Login" />
                        </div>
                        <Link to='/signup' className='text-center my-3'>New Here? Create <span className='text-orange-400'>Sign Up</span></Link>
                    </form>
                 
                </div>
                
            </div>
           
        </div>
    );
};

export default Login;