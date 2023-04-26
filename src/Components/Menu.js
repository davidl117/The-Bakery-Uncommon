import React, { useContext } from "react";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ShopContext } from "../Context/ShoppingCartContext";

export default function Menu({id, name, image, description, price}) {

    const {cartItems, addToCart, removeFromCart, Add, Subtract, count} = useContext(ShopContext);

    // const [count, setCount] = useState(0);


    // function Add() {
    //     return (
    //         setCount(prevCount => prevCount + 1 )
    //     )
    // }

    // function Subtract() {
    //     if (count <= 0){
    //         return
    //     }else {
    //     return (
    //         setCount(prevCount => prevCount - 1 )
    //     )
    //     }
    // }

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
    //     return(
    //         setCount(id)
    //     )
    // }
   
    return (
        <article className="product-image-container">
            <img className="product-image" alt="" src={image}/>
            <div className="productNameDescCount-container">
                <p className="product-name">{name}</p>
                <p className="product-description">{description}</p>
                <div className="cart-counter">
                    <h4>${price}</h4>
                    {/* <div className="button-container">    
                        <button onClick={() => Subtract(id)}>-</button>
                            <span>
                                <input className="cartCountField" value={cartItems[id]} onChange={(e) => e.target.value}/>
                                <button onClick={() => Add(id)}>+</button>
                            </span>
                    </div> */}
                    <div>
                        <button className="cart" onClick={() => addToCart(id)}>Add to basket
                            <FontAwesomeIcon className="cart_basket" icon={faShoppingBasket}>
                            </FontAwesomeIcon>
                            <div className="cart_count">{cartItems[id]}</div>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}
