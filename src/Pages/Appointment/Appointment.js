import React, { useState } from 'react';
import Footer from '../Shared/Navbar/Footer/Footer';

import AvailbleAppointment from './AppointmentHeader/AvaibleAppointment/AvailbleAppointment';
import AppointmentHeader from './AppointmentHeader/AppointmentHeader';

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailbleAppointment date={date}></AvailbleAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;