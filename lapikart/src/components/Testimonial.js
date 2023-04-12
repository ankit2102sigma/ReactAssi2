import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React, { useState, useEffect } from "react";
import './Style/Testimonial.css';

const Testimonial = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const testimonials = [
        {
            name: "Virat kohli",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/virat.jpeg"
        },

        {
            name: "Rohit Sharma",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/rohit.webp"
        },

        {
            name: "Surya",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/Suryakumar-Yadav.png"
        },
        {
            name: "Kishan",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/virat.jpeg"
        },
        {
            name: "Tim david",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/rohit.webp"
        },  {
            name: "MSD",
            testimonial: "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly." +
                "I am very impressed with the customer service at Lapi-cart. They were very helpful and resolved my issues quickly.",
            image: "/images/Suryakumar-Yadav.png"
        },

        // add more testimonials as needed
    ];

    return (
        <div className="slider-aboutus">
        <div className="header-tesimonials">
            <h1>Discover the power of honest opinions: Our customers speak for us.</h1>
        </div>
            <div className="testi-box">
            <Carousel responsive={responsive}>
                {testimonials.map((testimonial, index) => (
                    <div className="testimonial" key={index}>
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-name">{testimonial.name}</div>
                        <div className="testimonial-text">{testimonial.testimonial}</div>
                    </div>
                ))}
            </Carousel>
            </div>
        </div>


    );
};

export default Testimonial;
