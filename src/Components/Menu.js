import React, { useContext } from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ShopContext } from "../Context/ShoppingCartContext";

export default function Menu({id, name, image, description, price}) {

    const {addToCart} = useContext(ShopContext);

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

    // makes cart appear on add to basket click
    // function floatingCart() {
    //     if (count > 0 ) {
    //         return (
    //             <button className="floatingCart-btn">
    //                 View cart {count} items
    //             </button>
    //         )
    //     }
    // }

    // function cartCount() {
    //         setCount(count)
    // }
   
    return (
        <article className="product-image-container">
            <img className="product-image" alt="" src={image}/>
            <div className="productNameDescCount-container">
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
                        <button className="cart" onClick={() => addToCart(id)}>Add to basket
                            <FontAwesomeIcon className="cart_basket" icon={faShoppingBasket}>
                            </FontAwesomeIcon>
                            {/* <div className="cart_count">{cartCount}</div> */}
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
