import React from "react-dom";
import BakeryGoods from '../bakery_goods.json';
import { ShopContext } from "../../Context/ShoppingCartContext";
import { useContext } from "react";
import CartItem from "./cart-item";
import { Link } from "react-router-dom";

export default function ShopCart() {

    const {cartItems} = useContext(ShopContext)
    console.log(cartItems)

    function cartStatus() {
        if (cartItems === 0){
            return (
                <>
                    <h2>Your Basket Is Empty</h2>
                    <h4>Load up <Link to="/Menu"><i>here</i></Link></h4>
                </>
            )
        }else {
            return <h2> Your Basket of Items</h2>
        }
    }

    return (
        <div className="shopCart-container">
                {cartStatus()}
            <div className="shopCart-items">
                {BakeryGoods.map((product) => {
                    if (cartItems[product.id] !== 0){
                        return (
                            <CartItem 
                                data={product} 
                                key={product.id}
                                id={product.id}
                                image={product.image}
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                ingredients={product.ingredients}
                            />
                        )
                    }
                })}
            </div>
        </div>
    )
}