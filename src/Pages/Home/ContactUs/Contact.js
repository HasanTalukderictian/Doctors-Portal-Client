import React from 'react';
import background from '../../../assets/images/appointment.png';
import Swal from 'sweetalert2';

const Contact = () => {
    
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const data = { email, subject, message}
        console.log(data);
        fetch('http://localhost:5000/message', {
            method: "POST",
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('doctors-portal')}`
            },
            body:JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        if(data.insertedId){
            form.reset();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
        }
        })
    }


    return (
        <section className='w-full lg:max-h-fit p-4' style={{ background: `url(${background})` }}>
            <div className='my-10'>
                <h2 className='text-center text-primary my-5 text-xl'>Contact us</h2>
                <h2 className='text-4xl font-semibold my-2 text-center text-white'>Stay connected with us</h2>
                <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mx-auto lg:max-w-lg md:max-w-md sm:max-w-sm'>
                    <input type="email" name='email' placeholder="Email Address" className="input input-bordered lg:w-full md:w-full sm:w-full" />
                    <input type="text"  name='subject' placeholder="Subject" className="input input-bordered lg:w-full md:w-full sm:w-full" />
                    <input
                        type="text"
                        name='message'
                        placeholder="Your Message"
                        className="input input-bordered input-success lg:w-full md:w-full sm:w-full"
                        style={{ height: '200px' }}
                    />
                    <input type="submit" className="btn btn-success w-full" value="Submit" />
                </form>
            </div>
        </section>
    );
};

export default Contact;