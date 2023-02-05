import React, { useState } from "react";
import "./NavigationStyle.css";
import { Link } from "react-router-dom";

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false);
    
    function toggleMenu() {
        setMenuOpen(!menuOpen)
    }

    return (
        <div>
            <div className="ham-bars" onClick={toggleMenu}>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
                <div className="burger-bar"></div>
            </div>            
            <h1 className="title">The Bakery Uncommon</h1>
            <p className="shopping-cart">Cart</p>
            <nav className={`navigationBar-container ${menuOpen ? "menu-open": ""}`}>
                <li>
                <Link to="/">Text</Link>
                </li>
                <li>
                <Link to="/">Text</Link>
                </li>
                <li>
                <Link to="/">Text</Link>
                </li>
                <li>
                <Link to="/">Text</Link>
                </li>
                <li>
                <Link to="/">Text</Link>
                </li>
                <li>
                <Link to="/">Text</Link>
                </li>
            </nav>
        </div>
    )
}