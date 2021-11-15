import React from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { appoinmentId } = useParams();
    return (
        <div>
            <h2>Please pay for : {appoinmentId}</h2>
        </div>
    );
};

export default Payment;