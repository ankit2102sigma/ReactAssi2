import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import './Style/PaymentForm.css';

const PaymentForm = ({ handleSubmit }) => {
    const [cvv, setCvv] = useState('');
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
        } else if (name === 'cvv') {
            setCvv(value);
        }
    };

    const validateForm = () => {
        const nameRegEx = /^[A-Za-z]{1,15}( [A-Za-z]{1,15})+$/
        const cvvRegEx = /^\d{3}$/;
        const numberRegEx = /^\d{16}$/;


        console.log("errer", error);

        if (!name.trim()) {
            setError('Name is required');
            alert('Name is required');
            console.log("test");
            return false;
        }
        else if (!number.trim()) {
            setError('Card number is required');
            alert('Card number is required');
            return false;
        }
       else if (!expiry.trim()) {
            setError('Expiry date is required');

            alert('Expiry date is required');
            return false;
        }
        else if (!cvv.trim()) {
            setError('CVC is required');
            alert("CVC is required");
            return false;
        }
        else
         if(!(nameRegEx.test(name))){
             console.log("calling....");
            setError('Enter Valid  Name');
             alert('Enter Valid  Name');
            console.log("error", error)
            return false;
        }
         else
         if(!(cvvRegEx.test(cvv))){
             console.log("calling....");
             setError('Enter Valid  cvv');
             alert("Enter Valid  cvv");
             console.log("error", error)
             return false;
         }
         else
         if(!(numberRegEx.test(number))){
             console.log("calling....");
             setError('Enter Valid  number');
             alert("Enter Valid  number");
             console.log("error", error)
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
                cvc={cvv}
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
                    name="cvv"
                    placeholder="CVV"
                    value={cvv}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                    maxLength={3}
                    minLength={3}
                    required
                />

                <button type="submit">Submit Payment</button>
            </form>
        </div>
    );
};

export default PaymentForm;
