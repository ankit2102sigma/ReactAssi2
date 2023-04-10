import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Payment from "./pages/Payment";
import Cart from "./pages/Cart";
import NoPage from "./pages/NoPage";

import React from "react";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="Product" element={<Product />} />
                    <Route path="Cart" element={<Cart />} />
                    <Route path="Checkout" element={<Checkout />} />
                    <Route path="Aboutus" element={<Aboutus />} />
                    <Route path="Contactus" element={<Contactus />} />
                    <Route path="Payment" element={<Payment />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);