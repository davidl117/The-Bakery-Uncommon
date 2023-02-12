import React from "react";

export default function Menu() {

    // need state of count, price props, description props, image props, 
    // props for varying order types of certain items eg: 1 bagel price, 6 bagels price, 12 bagel price

    return (
        <>
        <h2>All orders need at least 48 hours of lead time.</h2>
        <article>
            <img src="./images/bagel.jpeg"/>
            <p>This is a description of the above image and it tells you all the
                sweet details of this product. Wether it is sweet savory or just plain delicious!
            </p>
            <div className="cart-counter">
                <h4>$8.99</h4>
                <button>-</button><span><span>3</span><button>+</button></span>
                <p>cart</p>
            </div>
        </article>
        </>

    )
}