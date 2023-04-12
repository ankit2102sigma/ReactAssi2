import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState, useEffect } from "react";
import './Style/ProductSlider.css';

const ProductSlider = () => {
    const [products, setProducts] = useState([]);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 5,
            slidesToSlide: 2,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }


    useEffect(() => {
        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const moveToProducts = (productId) => {
        window.location.href = '/product';
    };

    return (
        <div className="slider">
            <div>
                <h1>Buy Your Dream Laptop</h1>
            </div>
            <div className="main">
                <Carousel responsive={responsive}>
                    {products.map((product) => (
                        <div className="card" key={product.id}>
                            <img id="image_sldier" src={product.image} alt={product.name}/>
                            <h2>{product.name}</h2>
                            <p className="price">Rs {product.price}</p>
                            <p>
                                <button onClick={() => moveToProducts()}>VIew More</button>
                            </p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default ProductSlider;
