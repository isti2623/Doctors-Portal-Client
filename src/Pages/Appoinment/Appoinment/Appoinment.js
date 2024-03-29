import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader date={date} setDate={setDate}></AppoinmentHeader>
            <AvailableAppoinments date={date}></AvailableAppoinments>
        </div>
    );
};

export default Appoinment;