import React from 'react';

const BookingModal = ({ treatment, closeModal }) => {
    const { name, solts } = treatment;

    return (
        <div>
            <dialog className="modal" id="Booking_modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Bookings For: {name}</h3>
                    <p className="py-4"></p>
                    <button
                        className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={closeModal} // Call the closeModal function when the button is clicked
                    >
                        ✕
                    </button>
                    <div className="modal-action">
                        <a href="Booking_modal" className="btn">
                            Yay!
                        </a>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default BookingModal;