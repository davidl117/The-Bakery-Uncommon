import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { faChevronUp, faChevronDown, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../Context/ShoppingCartContext";

export default function Navigation({id}) {

    const {cartItems} = useContext(ShopContext)

    const [burger_bar, setBurgerClass] = useState("burger-bar unclicked");
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu_class, setMenuClass] = useState("");
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenu, setSubMenu] = useState("subMenu-hidden");
    const [isMobile, setIsMobile] = useState(true);

    console.log(menuOpen)
    console.log(isMobile)

    // opens and closes hamburger menu
    function toggleMenu() {
        if (!menuOpen) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu-open  transition clicked")
        }else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu-close transition")
        }
        setMenuOpen(!menuOpen)
    }

    // closes menu when link is clicked
    function closeMenu() {
        toggleMenu(false)
    }


    function handleOpenSubMenu() {
        if(!subMenuOpen) {
            setSubMenu("subMenu-visible")
        }else if (subMenuOpen === false && isMobile === false) {
            setSubMenu("subMenu-hidden")
        }else if (subMenuOpen === true) {
            setSubMenu("subMenu-hidden")
            toggleMenu(false)
        }
        setSubMenuOpen(!subMenuOpen)
    }

    function closeSubMenu() {
        handleOpenSubMenu()
    }

    // To check if screen should be mobile or desktop
    const handleResize = () => {
        if (window.innerWidth < 760) {
            setIsMobile(true)
        }else if (window.innerWidth > 760) {
            setIsMobile(false)
    }}
    
    useEffect(() => {
        window.addEventListener('load', handleResize)
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('load', handleResize)
            window.removeEventListener('resize', handleResize)
        }
    }, []) 
 
    return (
        <header>
                <h1 className="title-bar title-bar-sticky"><Link to="/" >The Bakery Uncommon</Link>
                    <span>
                        <div className="ham-bars" onClick={toggleMenu}>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                        </div>            
                    </span>
                </h1>
            <nav className={!isMobile ? `navigationBar` : `${menu_class}`}>
            <p className="shopping-cart">
                <Link to="ShopCart" onClick={() => closeMenu()}>
                    <button className={`shopping-cart_button ${menuOpen ? "shopping-cart_button" : "noDisplay"}`}>Go to Basket
                        <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                        <div>{cartItems[id]}</div>
                    </button>
                </Link>
            </p>
                <ul className={` ${menuOpen ? "list-items transition" : "transition noDisplay"}`}>
                    <li className="list-items">
                        <Link to="/" onClick={() => closeMenu()}>Home</Link>
                    </li>
                    <li className="list-items">
                        <Link to="Menu" onClick={() => closeMenu()}>Menu</Link>
                        <button className="subMenu_button" onClick={handleOpenSubMenu}>
                            <FontAwesomeIcon icon={subMenuOpen ? faChevronUp: faChevronDown }>
                            </FontAwesomeIcon>
                        </button>
                        <ul className={`subMenu ${subMenu}`}>
                            <li className={subMenu}><Link to="Menu" onClick={() => closeSubMenu()}>Pies</Link></li>
                            <li className={subMenu}><Link to="Menu" onClick={() => closeSubMenu()}>Bread</Link></li>
                            <li className={subMenu}><Link to="Menu" onClick={() => closeSubMenu()}>Muffins</Link></li>
                            <li className={subMenu}><Link to="Menu" onClick={() => closeSubMenu()}>Cookies</Link></li>
                        </ul>
                    </li>
                    <li className="list-items">
                        <Link to="/About" onClick={() => closeMenu()}>About</Link>
                    </li>
                    {/* <li className="list-items">
                        <Link to="#Contact" onClick={() => closeMenu()}>Contact us</Link>
                    </li> */}
                </ul>
                <button className={`sinLog-btn login ${menuOpen ? "" : "noDisplay"}`}>Login</button>
                <button className={` sinLog-btn signUp  ${menuOpen ? "" : "noDisplay"}`}>Sign up</button>
            </nav>
        </header>
        
    )
}