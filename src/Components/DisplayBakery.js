import BakeryGoods from "./bakery_goods.json";
import Menu from "./Menu";

export default function DisplayBakery() {

    const bakeryItems = BakeryGoods.map(baked => {
        return (
            <Menu 
                key={baked.id}
                id={baked.id}
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
            <h3 className="order-timing">All orders need 48 hour lead time. No orders are processed on 
                weekends.
            </h3>
            {bakeryItems}
            <button className="floatingCart-btn">
                    View cart items
             </button>
        </div>
    );
}


