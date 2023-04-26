import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShoppingCartContext";
// import BakeryGoods from '../bakery_goods.json'

export default function CartItem({id, name, image, price}) {
    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext)

    return (
        <article className="cartItems">
            <div className="cartCard-container">
                <img className="cart-image" alt="" src={image}/>
                <div className="productNameDescCount-container">
                    <p className="cartProduct-name">{name}</p>
                    <div className="cart-counter">
                        <h4>${price}</h4>
                        <div className="cartButton-container">    
                            <button onClick={() => removeFromCart(id)}>-</button>
                            <span>
                                <input className="cartCountField" value={cartItems[id]} onChange={(e) => e.target.value}/>
                                <button onClick={() => addToCart(id)}>+</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>    
        </article>
    )
}