import React, { useState } from "react";
import "./NavigationStyle.css";
import { Link } from "react-router-dom";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navigation() {

    const [burger_bar, setBurgerClass] = useState("burger-bar unclicked");
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu_class, setMenuClass] = useState(" menu-close navigationBar-container unclicked");

    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenu, setSubMenu] = useState("subMenu-hidden");

    function toggleMenu() {
        if (!menuOpen) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu-open clicked")
        }else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu-close navigationBar-container unclicked")
        }
        setMenuOpen(!menuOpen)
    }

    function closeMenu() {
        toggleMenu(false)
    }

    function handleOpenSubMenu() {
        if(!subMenuOpen) {
            setSubMenu("subMenu-visible")
        }else{
            setSubMenu("subMenu-hidden close")
        }
        setSubMenuOpen(!subMenuOpen)
    }
 
    return (
        <div>
            <header className="title-bar-sticky">
                <h1 className="title">The Bakery Uncommon
                    <span>
                        <div className="ham-bars" onClick={toggleMenu}>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                        </div>            
                    </span>
                </h1>
            </header>
            <p className="shopping-cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p>
            <nav className={`navigationBar-container ${menu_class}`}>
                <li>
                <Link to="/" onClick={() => closeMenu()}>Home</Link>
                </li>
                <li>
                <Link to="Menu" onClick={() => closeMenu()}>Menu</Link>
                <button className="subMenu_button" onClick={handleOpenSubMenu}>+</button>
                </li>
                {/* <ul className={subMenu}> */}
                    <li className={subMenu}><Link to="Menu" onClick={() => closeMenu()}>Pies</Link></li>
                    <li className={subMenu}><Link to="Menu" onClick={() => closeMenu()}>Bread</Link></li>
                    <li className={subMenu}><Link to="Menu" onClick={() => closeMenu()}>Muffins</Link></li>
                    <li className={subMenu}><Link to="Menu" onClick={() => closeMenu()}>Cookies</Link></li>
                {/* </ul> */}
                <h1 className="titleD">The Bakery Uncommon</h1> 
                <li>
                <Link to="/About" onClick={() => closeMenu()}>About</Link>
                </li>
                <li>
                <Link to="/" onClick={() => closeMenu()}>Contact us</Link>
                </li>
                <button className="signUp">Sign up</button>
                <button className="login">Login</button>
            </nav>
        </div>
    )
}