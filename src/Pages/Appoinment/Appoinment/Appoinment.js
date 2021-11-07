import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import AvailableAppoinments from '../AvailableAppoinments/AvailableAppoinments';

const Appoinment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AppoinmentHeader></AppoinmentHeader>
            <AvailableAppoinments></AvailableAppoinments>
        </div>
    );
};

export default Appoinment;