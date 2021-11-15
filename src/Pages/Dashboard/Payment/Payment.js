import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckOutForm from './CheckOutForm';


const stripePromise = loadStripe('pk_test_51Jvw0vH0R1XV4reWsjjMgwP0HnLfODjIrzHI89yzyGtN6D66Ohij9hFyMBW5tj0quluMnJntPoLx6uRmRxUXXO5g00TUuOT8H6');

const Payment = () => {
    const appointmentId = useParams().appoinmentId;
    console.log(appointmentId);
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    }, [appointmentId]);
    return (
        <div>
            <h2>Please Pay for: {appointment?.patientName} for {appointment?.serviceName}</h2>
            <h4>Pay: ${appointment?.price}</h4>
            <Elements stripe={stripePromise}>
                <CheckOutForm
                    appointment={appointment}
                />
            </Elements>
        </div>
    );
};

export default Payment;