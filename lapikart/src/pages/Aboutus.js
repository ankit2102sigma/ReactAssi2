import React from 'react';
import Footer from "../components/Footer";
import "./Css/AboutUs.css";
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Testimonial  from "../components/Testimonial";
import ProductsSlider from "../components/ProductsSlider";

const AboutUs = () => {



    return (
        <div className="about-us">
            <div className="header-image-container">
                <img src="/images/aboutus.jpg" alt="About Us" className="header-image" />
                <div className="contact-text">About Us</div>
            </div>

            <div className="content-container">
                <h2>Our Story</h2>
                <p>Lapikart is a leading e-commerce website that has been providing quality products and services for the last 10 years. With a mission to make online shopping easy, affordable, and enjoyable for everyone, Lapikart offers a wide range of high-quality products at competitive prices, including electronics, clothing, home goods, and more.

                    At Lapikart, we are committed to delivering exceptional customer service to our customers. We believe in building strong relationships with our customers by providing them with personalized attention, helpful resources, and reliable support. Whether you need assistance with placing an order, tracking a shipment, or resolving an issue, our friendly and knowledgeable team is here to help.

                    Our vision is to be the go-to destination for all your shopping needs. We are constantly expanding our product offerings and improving our website to make it easier and more convenient for you to find what you're looking for. With fast shipping, easy returns, and a secure checkout process, Lapikart is your one-stop shop for all your online shopping needs.

                    Thank you for choosing Lapikart as your preferred online shopping destination. We look forward to serving you and providing you with the best possible shopping experience.
                </p>
                <h3>Our Vision</h3>
                <p>At Lapikart, our vision is to be the leading online marketplace for customers worldwide. We believe that everyone should have access to high-quality products at affordable prices, and we are committed to making this vision a reality.

                    To achieve our vision, we are constantly working to expand our product offerings and improve our website to make it easier and more convenient for customers to shop with us. We want to be the go-to destination for all your shopping needs, offering a wide selection of products at competitive prices, and delivering exceptional customer service every step of the way.

                    We believe that customer satisfaction is key to our success, and we are dedicated to providing personalized attention and support to each and every customer. Our goal is to build strong relationships with our customers by understanding their needs and providing them with the best possible shopping experience.

                    Whether you're looking for electronics, clothing, home goods, or anything in between, we want to be your first choice for online shopping. With fast shipping, easy returns, and a secure checkout process, you can shop with confidence at Lapikart. Thank you for choosing us as your preferred online shopping destination, and we look forward to serving you.
                </p>
            </div>
            <Testimonial />
        </div>



    );
}

export default AboutUs;
