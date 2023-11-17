import React from 'react';

const AvaiableCart = ({service}) => {
    const {name, slots} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ?  <span>
                           {slots[0]}
                        </span>   : 
                        <span className='text-warning'> 
                            No Slots available 
                        </span> 
                    }
                </p>
                <p>{slots.length} space available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0} className="btn btn-primary">Get Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AvaiableCart;