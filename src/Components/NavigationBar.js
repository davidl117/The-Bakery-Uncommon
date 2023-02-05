import React, { useState } from "react";
import "./NavigationStyle.css";
import { Link } from "react-router-dom";

export default function Navigation() {

    const [burger_bar, setBurgerClass] = useState("burger-bar unclicked");
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu_class, setMenuClass] = useState("menu-hidden");

    function toggleMenu() {
        if (!menuOpen) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu-open")
        }else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu-hidden")
        }
        setMenuOpen(!menuOpen)
    }
    console.log(menuOpen);

    return (
        <div>
            <div className="ham-bars" onClick={toggleMenu}>
                <div className={burger_bar}></div>
                <div className={burger_bar}></div>
                <div className={burger_bar}></div>
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