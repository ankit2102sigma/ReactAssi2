import { Outlet, Link } from "react-router-dom";
import "./layout.css";
// import cartIcon from "./cart-icon.png";
import Footer from '../components/Footer'

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import React from "react";

const Layout = () => {
    return (
        <>
            <nav>
                <div className="logo-container">
                    <Link to="/">
                        <div className="logo"><a href="#">Lapi-KArt</a></div>
                    </Link>

                </div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Product">Products</Link>
                    </li>
                    <li>
                        <Link to="/Checkout">Checkout</Link>
                    </li>

                    <li>
                        <Link to="/Aboutus">About us</Link>
                    </li>
                    <li>
                        <Link to="/Contactus">Contact us</Link>
                    </li>
                        <li>
                            <Link to="/Cart">
                                <ShoppingCartCheckoutIcon />
                            </Link>
                        </li>
                </ul>
            </nav>

            <Outlet />

        </>
    );
};

export default Layout;
