import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './PaymentForm.css';

const PaymentForm = ({ handleSubmit }) => {
    const [cvc, setCvc] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [error, setError] = useState('');

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'number') {
            setNumber(value);
        } else if (name === 'name') {
            setName(value);
        } else if (name === 'expiry') {
            setExpiry(value);
        } else if (name === 'cvc') {
            setCvc(value);
        }
    };

    const validateForm = () => {
        const expiryDateRegex = /^[A-Za-z\s]+$/;

        if (!name.trim()) {
            setError('Name is required');
            return false;
        }
        if (!number.trim()) {
            setError('Card number is required');
            return false;
        }
        if (!expiry.trim()) {
            setError('Expiry date is required');
            return false;
        }
        if (!cvc.trim()) {
            setError('CVC is required');
            return false;
        }
        if(!(expiryDateRegex.test(name))){

            setError('Enter Valid  Name');
            return false;
        }
        setError('');
        return true;
    };

    const handleBuy = (e) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.clear();
            alert('Successfully bought product!');

                window.location.href = '/product';
            }
    };

    return (
        <div id="PaymentForm">
            <Cards
                cvc={cvc}
                expiry={expiry}
                focused={focus}
                name={name}
                number={number}
            />
            <form onSubmit={handleBuy}>
                <input
                    type="tel"
                    name="number"
                    placeholder="Card Number"
                    value={number}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength={16}
                    minLength={16}
                    required
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                />
                <input
                    type="month"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    // value={expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    required
                />
                <input
                    type="tel"
                    name="cvc"
                    placeholder="CVC"
                    value={cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength={3}
                    minLength={3}
                    required
                />
                {error && <div className="error">{error}</div>}
                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;
