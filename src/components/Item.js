import React from "react"

function Item(props) {
    const isClicked = props.cartData.some(currentItem => currentItem.id === props.item.id);

    function handleClick() {
        props.onBuyClick(props.item);
        props.item.quantity = 1
    }

    const oldPriceClassName = (
        `item__old-price ${props.item.priceOld.length !== 0 && 'item__old-price_active'}`);

    return (
        <li>
            <div className="item">
                <div className="item__img-wrapper">
                    <img src={props.item.img} alt="Фото товара" className="item__picture"/>
                </div>
                <div className="item__wrapper">
                    <div className="item__info">
                        <h3 className="item__name">{props.item.title}</h3>
                        <div>
                            <p className="item__new-price">{props.item.priceNew}</p>
                            <p className={oldPriceClassName}>{props.item.priceOld}</p>
                        </div>
                    </div>
                    <div className="item__price">
                        <div className="item__points">
                            <button className="item__star"></button>
                            <p className="item__star-counter">{props.item.rate}</p>
                        </div>
                        <button onClick={handleClick} className="item__buy"
                                disabled={isClicked}>{isClicked ? 'Товар в корзине' : 'Купить'}</button>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Item

