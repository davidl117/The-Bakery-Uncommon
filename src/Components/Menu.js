import React, { useState } from "react";
import BakeryGoods from "./bakery_goods.json";


export default function DisplayBakery() {

    const bake = BakeryGoods.map(baked => {
        return (
        <Menu 
                key={baked.id}
                image={baked.image}
                name={baked.name}
                description={baked.description}
                price={baked.price}
                ingredients={baked.ingredients} />
        )
    })

    return (
        <div>
            <h3>All orders need 48 hour lead time.</h3>
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
   

    // need state of count, price props, description props, image props, 
    // props for varying order types of certain items eg: 1 bagel price, 6 bagels price, 12 bagel price

    return (
        <>
        <article>
            <img src={image} />
            <p>{name}</p>
            <p>{description}</p>
            <div className="cart-counter">
                <h4>${price}</h4>
                <button onClick={Subtract}>-</button><span><span>{count}</span><button onClick={Add}>+</button></span>
                <p>cart</p>
            </div>
        </article>
        </>
    );
}
