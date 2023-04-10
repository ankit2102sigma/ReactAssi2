import React from 'react'
import Header from '../components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import ProductsSlider from "../components/ProductsSlider";

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <img id="img-banner" src="images/lap.jpg"/>
                <h1 className="text-ali">Laptops That Bring Out the Best In You</h1>
                <p className="text-ali">In today’s fast-paced world, a laptop is an essential tool for most people. Whether you’re a student, a professional, or someone who just wants to stay connected, a good laptop can make all the difference. But with so many options on the market, it can be hard to know which one to choose . </p>
                <ProductsSlider />
            </div>

        </>
    );
}

export default Home;
