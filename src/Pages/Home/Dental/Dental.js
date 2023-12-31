import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import { Link } from 'react-router-dom';

const Dental = () => {
    return (
        <div className="hero min-h-screen my-10">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='mx-5 '>
                    <h1 className="text-5xl font-bold">Exceptional Dental <br />
                     Care, on Your Terms</h1>
                    <p className="py-6 ">It is a long established fact that a reader will be distracted by the <br />
                     readable content of a page when looking at its layout. The point  <br />
                     of using Lorem Ipsumis that it has a more-or-less normal <br />
                      distribution of letters,as opposed to using 'Content here, content <br />
                       here', making it look like readable English. Many desktop <br />
                        publishing packages and web page</p>
                    <Link to='appointment' className="btn btn-primary uppercase text-white">Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default Dental;