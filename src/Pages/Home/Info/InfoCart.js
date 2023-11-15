import React from 'react';

const InfoCart = ({img, CardTitle, Description, bgClass}) => {
    return (
        <div className={`card lg:card-side p-2 bg-base-100 pt-2 shadow-xl  ${bgClass}`}>
            <figure className='ml-4'><img src={img} className='p-2 pt-2' alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{CardTitle}</h2>
                <p>{Description}</p>
                
            </div>
        </div>
    );
};

export default InfoCart;