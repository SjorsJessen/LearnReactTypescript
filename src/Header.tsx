import React from "react";
import {Link} from "react-router-dom";

import logo from "./logo.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <h1 className="header-title">React Shop</h1>
            <nav>
                <Link to="/products" className="headerlink">
                    Products</Link>
                <Link to="/admin" className="header-link">Admin</Link>
            </nav>
        </header>
    );
};

export default Header;