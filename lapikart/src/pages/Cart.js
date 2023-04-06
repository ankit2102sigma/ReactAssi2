import { useState, useEffect } from "react";

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(items);
    }, []);

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} - ${item.price * item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
