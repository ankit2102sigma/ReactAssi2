import { useState, useEffect } from "react";
import "./Css/Product.css";

function Product() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(savedCartItems);

        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            const updatedCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            const shouldAdde = window.confirm("Are you sure you want to add this item to your cart?");
            if (shouldAdde) {
                setCartItems(updatedCartItems);
            }
        } else {
            const shouldAdd = window.confirm("Are you sure you want to add this item to your cart?");
            if (shouldAdd) {
                const newCartItem = { id: product.id, name: product.name, price: product.price, quantity: 1 };
                setCartItems([...cartItems, newCartItem]);
                // window.alert("Product added successfully!");
            }
        }
    };

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    console.log("cartItems", cartItems);

    return (
        <div>

            <div className="product-list">
                {products.map((product) => (
                    <div className="product" key={product.id}>
                        <h3>{product.name}</h3>
                        <img id="img" src={product.image} alt={product.name} />
                        <p>{product.description}</p>
                        <p>{product.price} Rs</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;
