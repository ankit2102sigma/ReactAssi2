import React from 'react';
import PaymentForm from '../components/PaymentForm';


const Payment = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!cartItems || cartItems.length === 0) {
        alert('No products in cart. Let\'s buy one!');
        window.location.href = '/product';
        return null;
    }
    return (
        <div>
            <h1>Payment</h1>
            <PaymentForm />
        </div>
    );
};

export default Payment;
