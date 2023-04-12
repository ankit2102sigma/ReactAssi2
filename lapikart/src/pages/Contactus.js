import React from 'react'
import './Css/Contactus.css'
import axios from 'axios';

const ContactForm = () => {
    const [formStatus, setFormStatus] = React.useState('Send')


    const onSubmit = (e) => {
        e.preventDefault();
        setFormStatus('Submitting...');

        const formData = new FormData(e.target);
        axios.post('http://localhost/Ankit_react2/Php/saveForm.php', formData)
            .then((response) => {
                if (response.status === 200) {
                    setFormStatus('Submitted');
                } else {
                    setFormStatus('Error');
                }
            })
            .catch((error) => {
                console.error(error);
                setFormStatus('Error');
            });


        axios.post('http://localhost/Ankit_react2/Php/sendEmail.php', formData)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });

    };



    return (
        <div className="main-contact">
            <header className="head-contact">
                <div className="contact-text">Contact Us</div>
                <img id="img-contact" src="/images/contactus.jpg" alt="Contact Us"/>
            </header>
            <div className="container my-4">

                <div className="contact-content">
                    <section>
                        <h2>How can we help you?</h2>
                        <p>See our platform in action <br></br>
                            Request a personalized demo of TUNE’s partner marketing platform</p>
                        <p>Master performance marketing <br></br> with TUNE Academy courses and industry research</p>
                             <p>   Explore life at TUNE:<br></br> Search open positions, read about company culture and values, and explore our charitable initiatives</p>

                    </section>
                    <section>
                        <h2>Points of Contact</h2>
                        <p>U.S. | TUNE</p>
                        <p>11350 McCormick Rd, EP III, Suite 200,</p>
                        <p>Hunt Valley, MD 21031</p>
                        <p>Information and Sales: <a href="mailto:partnermarketing@tune.com">partnermarketing@tune.com</a></p>
                        <p>Support: <a href="mailto:support@tune.com">support@tune.com</a></p>
                        <p>Verification of Employment: <a href="mailto:voe@constellationhbs.com">voe@constellationhbs.com</a></p>
                    </section>
                </div>
                <form onSubmit={onSubmit} className="contact-form">
                    <div className="form-group">
                        <label className="form-label" htmlFor="fname">
                            First Name
                        </label>
                        <input className="form-control" type="text" id="fname" name="fname" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="lname">
                            Last Name
                        </label>
                        <input className="form-control" type="text" id="lname" name="lname" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input className="form-control" type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="phone">
                            Phone Number
                        </label>
                        <input className="form-control" type="tel" id="phone" name="phone" required />
                    </div>

                    <div className="form-group">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" name="message" required />
                    </div>

                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>

            </div>
        </div>
    )
}

export default ContactForm
