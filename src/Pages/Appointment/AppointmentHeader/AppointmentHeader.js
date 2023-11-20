import React from 'react';
import img from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppointmentHeader = ({ date, setDate }) => {
    return (
        <div className=" bg-gray-100">
            <div className="flex flex-col lg:flex-row items-center justify-center p-8">
                <img  src={img} className="max-w-full h-auto lg:max-w-md rounded-lg shadow-2xl mb-2 lg:mb-0" alt="Chair" />
                <div className=" p-8 rounded-lg">
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="w-full bg-white border rounded-lg p-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;