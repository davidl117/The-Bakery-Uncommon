import React from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


export default function Menu({ name, image, description, price}) {
    
    const [count, setCount] = useState(0);


    function Add() {
        return (
        setCount(count + 1 )
        )
    }

    function Subtract() {
        if (count <= 0){
            return
        }else {
        return (
        setCount(count - 1 )
        )
        }
    }

    function floatingCart() {
        if (count > 0 ) {
            return (
                <button className="floatingCart-btn">
                    View cart {count}
                </button>
            )
        }
    }

    function cartCount() {
            setCount(count)
    }
   
    // props for varying order types of certain items 
    // eg: 1 bagel price, 6 bagels price, 12 bagel price

    return (
        <article className="product-image-container">
            <img className="product-image" alt="" src={image}/>
            <p className="product-name">{name}</p>
            <p className="product-description">{description}</p>
            <div className="cart-counter">
                <h4>${price}</h4>
                <div className="button-container">    
                    <button onClick={Subtract}>-</button><span>
                        <span>{count}</span>
                        <button onClick={Add}>+</button></span>
                </div>
                <div>
                    <button className="cart" onClick={floatingCart}>Add to basket
                    <FontAwesomeIcon className="cart_basket" icon={faShoppingBasket}>
                    </FontAwesomeIcon>
                    <div className="cart_count">{cartCount}</div>
                    </button>
                </div>
            </div>
            
        </article>
    );
}
