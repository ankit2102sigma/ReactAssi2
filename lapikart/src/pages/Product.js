import { useState, useEffect } from "react";
import "./Product.css";
function Product() {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Load cart items from local storage
        const savedCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");
        setCartItems(savedCartItems);

        fetch("/products.json")
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error(error));
    }, []);

    const handleAddToCart = (product) => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // Increment the quantity if the product is already in the cart
            const updatedCartItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedCartItems);
        } else {
            // Add the product to the cart with a quantity of 1
            const newCartItem = { id: product.id, name: product.name, price: product.price, quantity: 1 };
            setCartItems([...cartItems, newCartItem]);
        }
    };

    // Save cart items to local storage whenever the cart items state changes
    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    console.log("cartItems", cartItems);
    return (
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

            <div className="cart">
                <h2>Cart</h2>
                <ul>
                    {cartItems.map((item) => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} - ${item.price * item.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Product;
