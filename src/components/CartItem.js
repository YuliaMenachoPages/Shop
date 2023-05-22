import React, {useState} from "react"

function CartItem(props) {
    const [itemCount, setItemCount] = useState(props.cartData.find(currentItem => currentItem.id === props.cartItem.id).quantity);
    const isDisabled = (itemCount <= 1);
    const amount = props.cartItem.priceNew * props.cartItem.quantity;


    function handleDecrement() {
        const cartDataStorage = props.cartData
        const index = props.cartData.findIndex(currentItem => currentItem.id === props.cartItem.id)
        cartDataStorage[index].quantity = itemCount - 1
        sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
        setItemCount(itemCount - 1)
        props.onCartCount();
    }

    function handleIncrement() {
        const cartDataStorage = props.cartData
        const index = props.cartData.findIndex(currentItem => currentItem.id === props.cartItem.id)
        cartDataStorage[index].quantity = itemCount + 1
        sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
        setItemCount(itemCount + 1)
        props.onCartCount();
    }

    function handleDelete() {
        props.onDeleteClick(props.cartItem)
    }

    return (
        <li className="cart-item">
            <div className="cart-item__column-one">
                <img src={props.cartItem.img} alt="Фото товара" className="cart-item__picture"/>
                <div className="cart-item__incrementer">
                    <button className="cart-item__button cart-item__button_type_decreaser" disabled={isDisabled}
                            onClick={handleDecrement}></button>
                    <p className="cart-item__increment-counter">{itemCount}</p>
                    <button className="cart-item__button cart-item__button_type_increaser"
                            onClick={handleIncrement}></button>
                </div>
            </div>
            <div className="cart-item__column-two">
                <h3 className="cart-item__name">{props.cartItem.title}</h3>
                <p className="cart-item__price">{props.cartItem.priceNew}</p>
            </div>
            <div className="cart-item__column-three">
                <button className="cart-item__delete" onClick={handleDelete}></button>
                <p className="cart-item__amount">{amount}</p>
            </div>
        </li>
    )
}

export default CartItem