import React, { useState } from 'react';
import BookingModal from './BookingModal/BookingModal';



const AvaiableCart = ({ service, setTreatment }) => {
    const { name, slots } = service;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title text-primary">{name}</h2>
                <p>
                    {slots.length > 0 ? (
                        <span>{slots[0]}</span>
                    ) : (
                        <span className="text-warning">No Slots available</span>
                    )}
                </p>
                <p>{slots.length} space available</p>
                <div className="card-actions justify-center">
                    <a
                        href="#Booking_modal"
                        className="btn btn-primary"
                        onClick={() => {
                            setTreatment(service);
                            openModal();
                        }}
                        disabled={slots.length === 0}
                    >
                        Get Appointment
                    </a>
                </div>
            </div>

            {/* Render BookingModal component conditionally */}
            {isModalOpen && <BookingModal treatment={service} closeModal={closeModal} />}
        </div>
    );
};

export default AvaiableCart;