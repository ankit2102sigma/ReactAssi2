import React from "react";
import { Carousel } from 'react-bootstrap';
import './Style/Header.css'


function Header() {
    return (
        <Carousel>
            <Carousel.Item className="height-img">
                <img
                    className="d-block w-100"
                    src="/images/pexels-cottonbro-studio-4065876.jpg"
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/67.webp"
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="/images/12.webp"
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    );
}

export default Header;
