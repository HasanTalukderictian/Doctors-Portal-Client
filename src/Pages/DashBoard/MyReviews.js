import { da } from 'date-fns/locale';
import React from 'react';
import Swal from 'sweetalert2';

const MyReviews = () => {
    const imgStorageKey = '056aa7da78dbf2cccdd13c6d73b05bfc';
   
    const handleFormSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;
        const img = form.img.files[0];
        const formData = new FormData();
        formData.append('image', img);
    
        try {
            // Upload image to ImgBB
            const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${imgStorageKey}`, {
                method: 'POST',
                body: formData,
            });
    
            if (!imgbbResponse.ok) {
                throw new Error('Failed to upload image to ImgBB');
            }
    
            const imgbbResult = await imgbbResponse.json();
            console.log('ImgBB Response:', imgbbResult);
    
            
            const data = {
                name,
                message,
                img: imgbbResult.data.url, 
            };
           

            fetch('http://localhost:5000/review', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('doctors-portal')}`,

                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    form.reset();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your Review has been send",
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
    
        } catch (error) {
            console.error('Error:', error);
        }
    };


    return (
        <div>
            <h2 className='text-4xl font-bold text-center my-4 mx-4'> You can Review</h2>
            <form onSubmit={handleFormSubmit} className='grid grid-cols-1 gap-4 mx-auto border rounded-lg p-4 lg:max-w-lg md:max-w-md sm:max-w-sm'>
                <input type='text' name='name' placeholder='Your Name' className='input input-bordered input-primary w-full max-w-xs' />
                <input
                    type="text"
                    name='message'
                    placeholder="Your Message"
                    className="input input-bordered input-success w-full max-w-xs"
                    style={{ height: '200px' }}
                />
                <input type='file' name='img' placeholder="Your Image" className='file-input file-input-bordered file-input-secondary w-full max-w-xs' />
                <input type='submit' className='file-input file-input-bordered file-input-secondary w-full max-w-xs' value='Add' />
            </form>
        </div>
    );
};

export default MyReviews;