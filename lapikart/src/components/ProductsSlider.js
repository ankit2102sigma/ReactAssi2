import React, { useState, useEffect } from "react";
import "./ProductsSlider.css";

const ProductsSlider = () => {
    const [products, setProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesPerPage = 4;

    useEffect(() => {
        fetch("products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const handleClick = (action) => {
        const lastIndex = products.length - slidesPerPage;
        switch (action) {
            case "prev":
                setCurrentIndex((prevIndex) =>
                    prevIndex <= 0 ? lastIndex : prevIndex - slidesPerPage
                );
                break;
            case "next":
                setCurrentIndex((prevIndex) =>
                    prevIndex === lastIndex ? 0 : prevIndex + slidesPerPage
                );
                break;
            default:
                setCurrentIndex(0);
                break;
        }
    };

    return (
        <div className="slider">
            <div className="slider-header">
                <h2>Featured Products</h2>
                <div className="slider-nav">
                    <button className="slider-prev" onClick={() => handleClick("prev")}>
                        <i className="fa fa-angle-left"></i>
                    </button>
                    <button className="slider-next" onClick={() => handleClick("next")}>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="slider-body">
                <div
                    className="slider-wrapper"
                    style={{
                        transform: `translateX(-${currentIndex * (100 / slidesPerPage)}%)`,
                    }}
                >
                    {products.map((product) => (
                        <div key={product.id} className="slider-slide">
                            <div className="card">
                                <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">${product.price}</p>
                                    <a href="#" className="btn btn-primary">
                                        Add to Cart
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsSlider;
