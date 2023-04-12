import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Style/BillingForm.css';

const BillingForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        const nameRegex = /^[a-zA-Z\s]{1,15}$/;
        const addressRegex = /^[a-zA-Z0-9\s,'-]{1,20}$/;
        const cityRegex = /^[a-zA-Z\s]{1,10}$/;
        const stateRegex = /^[a-zA-Z\s]{1,10}$/;

        if (name === 'name') {
            // validate name input
            if (nameRegex.test(value)) {
                setName(value);
            } else {
                setName('');
            }
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'address') {
            // validate address input
            if (addressRegex.test(value)) {
                setAddress(value);
            } else {
                setAddress('');
            }
        } else if (name === 'city') {
            // validate city input
            if (cityRegex.test(value)) {
                setCity(value);
            } else {
                setCity('');
            }
        } else if (name === 'state') {
            // validate state input
            if (stateRegex.test(value)) {
                setState(value);
            } else {
                setState('');
            }
        } else if (name === 'zip') {
            setZip(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Address Added Successfully');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="mx-3">Billing Address</h2>
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
                <input type="number" name="zip" value={zip} onChange={handleInputChange} maxLength={7} minLength={5} required />
            </label>
            <div className="button-group">
                <button>
                <Link to="/payment" className="button primary" onClick={handleSubmit}>Submit</Link></button>
            </div>
        </form>
    );
};

export default BillingForm;
