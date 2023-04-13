import React, { useState } from 'react';
import './Style/BillingForm.css';
import { useNavigate } from 'react-router-dom';


const BillingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let isValid = true;
        const nameRegex = /^[a-zA-Z\s]{1,50}$/;
        const addressRegex = /^[a-zA-Z0-9\s,'-]{1,50}$/;
        const cityRegex = /^[a-zA-Z\s]{1,50}$/;
        const stateRegex = /^[a-zA-Z\s]{1,50}$/;

        if (name === 'name') {
            // validate name input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'address') {
            // validate address input
            const regex = /^[a-zA-Z0-9\s,'-]*$/;
            isValid = regex.test(value);
            setAddress(value);
        } else if (name === 'city') {
            // validate city input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setCity(value);
        } else if (name === 'state') {
            // validate state input
            const regex = /^[a-zA-Z\s]*$/;
            isValid = regex.test(value);
            setState(value);
        } else if (name === 'zip') {
            setZip(value);
        }

        if (!isValid) {
            alert(`Invalid ${name} input`);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Address Added Successfully")
        navigate('/Payment');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className=" mx-3">Billing Address</h2>
            <label>
                Name:
                <input type="text" name="name" value={name} onChange={handleInputChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={email} onChange={handleInputChange} required />
            </label>
            <label>
                Address:
                <input type="text" name="address" value={address} onChange={handleInputChange} required />
            </label>
            <label>
                City:
                <input type="text" name="city" value={city} onChange={handleInputChange} required />
            </label>
            <label>
                State:
                <input type="text" name="state" value={state} onChange={handleInputChange} required />
            </label>
            <label>
                ZIP Code:
                <input type="number" name="zip" value={zip} onChange={handleInputChange}  maxLength={7}
                       minLength={5}required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BillingForm;
