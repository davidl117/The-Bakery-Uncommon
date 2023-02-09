import React, { useState } from "react";
import "./NavigationStyle.css";
import { Link } from "react-router-dom";

export default function Navigation() {

    const [burger_bar, setBurgerClass] = useState("burger-bar unclicked");
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu_class, setMenuClass] = useState("hidden navigationBar-container unclicked");

    function toggleMenu() {
        if (!menuOpen) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu-open clicked")
        }else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("hidden unclicked")
        }
        setMenuOpen(!menuOpen)
        console.log(menuOpen);
    }
 
    return (
        <div>
            <h1 className="title">The Bakery Uncommon 
                <span>
                    <div className="ham-bars" onClick={toggleMenu}>
                        <div className={burger_bar}></div>
                        <div className={burger_bar}></div>
                        <div className={burger_bar}></div>
                    </div>            
                </span>
            </h1>
            <p className="shopping-cart">Cart</p>
            <nav className={`navigationBar-container ${menu_class}`}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/">Menu</Link>
                </li>
                <h1 className="titleD">The Bakery Uncommon</h1> 
                <li>
                <Link to="/">About</Link>
                </li>
                <li>
                <Link to="/">Contact us</Link>
                </li>
                <button>Sign up</button>
                <button>Login</button>
            </nav>
        </div>
    )
}