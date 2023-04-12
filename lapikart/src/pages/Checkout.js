import React from 'react';
// import PaymentForm from '../components/PaymentForm';
import BillingForm from '../components/BillingForm';

const Checkout = () => {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));

    if (!cartItems || cartItems.length === 0) {
        alert('No products in cart. Let\'s buy one!');
        window.location.href = '/product';
        return null;
    }

    return (
        <div>
            <BillingForm />
        </div>
    );
};

export default Checkout;
