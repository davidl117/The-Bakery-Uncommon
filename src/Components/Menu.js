import React, { useState } from "react";
import './MenuStyle.css';
import BakeryGoods from "./bakery_goods.json";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function DisplayBakery() {

    const bake = BakeryGoods.map(baked => {
        return (
        <Menu 
                key={baked.id}
                image={baked.image}
                name={baked.name}
                description={baked.description}
                price={baked.price}
                ingredients={baked.ingredients} 
                />
        )
    })

    return (
        <div>
            <h3 className="order-timing">All orders need 48 hour lead time.</h3>
            {bake}
        </div>
    );
}

function Menu({ name, image, description, price}) {

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
   
    // props for varying order types of certain items 
    // eg: 1 bagel price, 6 bagels price, 12 bagel price

    return (
        <>
            <article>
                <img className="product-image" alt="" src={image} />
                <p className="product-name">{name}</p>
                <p className="product-description">{description}</p>
                <div className="cart-counter">
                    <h4>${price}</h4>
                    <div className="button-container">    
                        <button onClick={Subtract}>-</button><span>
                            <span>{count}</span>
                            <button onClick={Add}>+</button></span>
                    </div>
                    <div className="cart-container">
                        <button className="cart">Add to basket
                        <FontAwesomeIcon className="cart_basket" icon={faShoppingBasket}>
                        </FontAwesomeIcon>
                        {/* <div className="cart_count">3</div> */}
                        </button>
                    </div>
                </div>
            </article>
        </>
    );
}
