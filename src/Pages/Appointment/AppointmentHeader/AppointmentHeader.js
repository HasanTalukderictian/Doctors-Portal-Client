import React, { useState } from 'react';
import img from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';


const AppointmentHeader = ({date, setDate}) => {
  

    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate} />
                    
                    </div>

                </div>

            </div>


        </div>


    );
};

export default AppointmentHeader;