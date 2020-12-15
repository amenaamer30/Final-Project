import React,{useContext} from "react"
import {CartContext} from "../Global/CartContext"
const Cart = () => {
    const {shoppingCart, totalPrice, qty, dispatch}=useContext(CartContext);

return (
<div className="cart-container">
<div className="cart-details" style={{marginTop: '100px' }}>
        {shoppingCart.length > 0 ? 
    shoppingCart.map(cart =>(
        <div className="cart" key={cart.id}>
            <span className="cart-image"><img src={cart.image} alt='not-found' /></span>
            <span className="cart-product-name">{cart.name}</span>
            <span className="cart-product-price">{cart.price}</span>
            <span className="inc"><i class="fas fa-plus"></i></span> 
            <span className="product-quantity">{cart.qty}</span>
            <span className="dec"><i class="fas fa-minus"></i></span>
            <span className="product-total-price">500.00</span>
            <span className="delete-product"><i class="fas fa-trash-alt"></i></span>



        </div>

    )) 
    : 'Sorry your cart is currently empty'}
</div>

</div>

)

}
export default Cart;