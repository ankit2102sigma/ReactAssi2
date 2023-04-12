import React from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Home.css'
import ProductsSlider from "../components/ProductsSlider";

const Home = () => {
    const handleImageClick = () => {
        window.location.href = '/product';
    }

    return (
        <>
            <Header />
            <div>
                <img
                    id="img-banner"
                    src="images/lap.jpg"
                    alt="Laptop"
                    onClick={handleImageClick}
                    className="zoom-image"
                />
                <img
                    id="img-banner"
                    src="images/15.avif"
                    alt="15"
                    onClick={handleImageClick}
                    className="zoom-image"
                />
                <ProductsSlider />
                <img
                    id="img-banner"
                    src="images/deal.jpg"
                    alt="Deal"
                    onClick={handleImageClick}
                    className="zoom-image"
                />
                <img
                    id="img-banner"
                    src="images/size.webp"
                    alt="Size"
                    onClick={handleImageClick}
                    className="zoom-image"
                />
            </div>

        </>
    );
}

export default Home;
