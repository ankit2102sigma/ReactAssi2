import { useState, useEffect } from "react";
import "./Cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
    }, []);

    const handleRemoveFromCart = (item) => {
        const updatedCartItems = cartItems.filter((i) => i.id !== item.id);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const handleIncreaseQuantity = (item) => {
        const updatedCartItems = cartItems.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };
    const BuyProduct = () => {

        window.location.href = "/Checkout";
    };
    const handleDecreaseQuantity = (item) => {
        const updatedCartItems = cartItems
            .map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
            )
            .filter((i) => i.quantity > 0);
        setCartItems(updatedCartItems);
        localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    };

    const totalAmount = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    return (
        <div className="container">
            <div className="box">
                {cartItems.length > 0 ? (
                    <div className="cart">
                        <h2>Cart</h2>
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>
                                    <div className="cart-item-info">
                                        <span className="cart-item-name">{item.name}</span>
                                        <span className="cart-item-price">
                      ${item.price} x {item.quantity} = $
                                            {item.price * item.quantity}
                    </span>
                                    </div>
                                    <div className="cart-item-actions">
                                        <button
                                            className="remove-button"
                                            onClick={() => handleRemoveFromCart(item)}
                                        >
                                            Remove
                                        </button>
                                        <button
                                            className="quantity-button"
                                            onClick={() => handleIncreaseQuantity(item)}
                                        >
                                            +
                                        </button>
                                        <button className="quantity-button">{item.quantity}</button>
                                        <button
                                            className="quantity-button"
                                            onClick={() => handleDecreaseQuantity(item)}
                                        >
                                            -
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <p className="total-amount">Total amount: ${totalAmount}</p>
                        <button className="buy-now-button"  onClick={() => BuyProduct()}>Buy now</button>
                    </div>
                ) : (
                    <p>No products in cart</p>
                )}
            </div>
        </div>
    );
}

export default Cart;
