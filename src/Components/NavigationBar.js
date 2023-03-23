import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { faCartShopping, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Navigation() {

    const [burger_bar, setBurgerClass] = useState("burger-bar unclicked");
    const [menuOpen, setMenuOpen] = useState(false);
    const [menu_class, setMenuClass] = useState("unclicked");
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const [subMenu, setSubMenu] = useState("subMenu-hidden");
    const [isMobile, setIsMobile] = useState(true);

    function toggleMenu() {
        if (!menuOpen) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu-open clicked")
        }else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("unclicked")
        }
        setMenuOpen(!menuOpen)
    }

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
        }
    }, []) 
 
    return (
        <header>
                <h1 className="title-bar title-bar-sticky"><Link to="/" style={{color:"#f5f1ed"}}>The Bakery Uncommon</Link>
                    <span>
                        <div className="ham-bars" onClick={toggleMenu}>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                            <div className={burger_bar}></div>
                        </div>            
                    </span>
                </h1>
            {/* <p className="shopping-cart"><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p> */}
            <nav className={!isMobile ? `navigationBar` : `menu-close ${menu_class}`}>
                <ul className="li-container">
                    <li>
                        <Link to="/" onClick={() => closeMenu()}>Home</Link>
                    </li>
                    <li>
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
                    <li>
                        <Link to="/About" onClick={() => closeMenu()}>About</Link>
                    </li>
                    <li>
                        <Link to="#Contact" onClick={() => closeMenu()}>Contact us</Link>
                    </li>
                </ul>
                <button className="sinLog-btn login">Login</button>
                <button className="sinLog-btn signUp">Sign up</button>
            </nav>
        </header>
        
    )
}