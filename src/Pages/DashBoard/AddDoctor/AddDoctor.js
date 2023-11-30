import React from 'react';
import Swal from 'sweetalert2';

const AddDoctor = () => {
  const imgStorageKey = '056aa7da78dbf2cccdd13c6d73b05bfc';

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const specialist = form.specialist.value; // Note: I made this lowercase for consistency
    const price = form.price.value;
    const img = form.img.files[0];

    // Create FormData and append the image
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

      // Now you can use imgbbResult.data.url to get the hosted image URL

      // Continue with the rest of your data
      const data = {
        name,
        specialist,
        price,
        doctorimg: imgbbResult.data.url, // Use the hosted image URL
      };
      console.log(img)
      
        fetch('http://localhost:5000/doctors', {
            method:"POST", 
            headers: {
                'content-type':'application/json',
                authorization: `Bearer ${localStorage.getItem('doctors-portal')}`,
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            console.log('After Add Data into Mongodb', data);
            if(data.insertedId){
                form.reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Doctor Added Successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

      // Add logic to send data to your server or perform any other actions

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='my-3 mx-auto'>
      <h2 className='text-3xl'>Add New Doctor</h2>
      <div className='my-3 mx-2 grid justify-center'>
        <form onSubmit={handleSubmit} className='border rounded-lg grid space-y-3 my-3 mx-3 p-4'>
          <input type='text' name='name' placeholder='Doctor Name' className='input input-bordered input-primary w-full max-w-xs' />
          <input type='text' name='specialist' placeholder='Specialist' className='input input-bordered input-primary w-full max-w-xs' />
          <input type='text' name='price' placeholder='Price' className='input input-bordered input-primary w-full max-w-xs' />
          <input type='file' name='img' className='file-input file-input-bordered file-input-secondary w-full max-w-xs' />
          <input type='submit' className='file-input file-input-bordered file-input-secondary w-full max-w-xs' value='Add' />
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;