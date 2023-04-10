import React from "react";
import { Carousel } from 'react-bootstrap';
import './Header.css'


function Header() {
    return (
        <Carousel>
            <Carousel.Item className="height-img">
                <img
                    className="d-block w-100"
                    src="/images/76.jpeg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/12.webp"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/67.webp"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Header;
