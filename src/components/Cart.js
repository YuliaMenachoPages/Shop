import React from "react"
import CartItem from "./CartItem";

function Cart(props) {


    const total = props.cartData.length !== 0 ? props.cartData.map((cartItem) => (cartItem.priceNew * cartItem.quantity)).reduce((total, amount) => total + amount) : 0

    return (
        <section className="cart">
            <h2 className="cart__title">Корзина</h2>
            <div className="cart__container">
                <ul className="cart__items-container">
                    {props.cartData.length > 0 && props.cartData.map((cartItem) => (
                        <CartItem key={cartItem.id}
                                  setCartCount={props.setCartCount}
                                  cartCount={props.cartCount}
                                  onDeleteClick={props.onDeleteClick}
                                  cartItem={cartItem}
                                  cartData={props.cartData}
                                  onCartCount={props.onCartCount}
                        />))}
                </ul>
                <div className="cart__buy">
                    <div className="cart__total-amount">
                        <p className="cart__total">Итого</p>
                        <p className="cart__amount">{total}</p>
                    </div>
                    <button className="cart__buy-button">Перейти к оформлению</button>
                </div>
            </div>
        </section>
    )
}

export default Cart