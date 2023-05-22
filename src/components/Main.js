import React from "react"
import Item from './Item'
import {headphones, headphonesWireless} from "../utils/Consts";

function Main(props) {

    return (
        <>
            <section className="items">
                <h2 className="items__title">Наушники</h2>
                <ul className="items__container">
                    {headphones.map((item) => (
                        <Item key={item.id}
                              onBuyClick={props.onBuyClick}
                              item={item}
                              cartData={props.cartData}
                              isClicked={props.isClicked}
                        />
                    ))}
                </ul>
            </section>
            <section className="items">
                <h2 className="items__title">Беспроводные наушники</h2>
                <ul className="items__container">
                    {headphonesWireless.map((item) => (
                        <Item key={item.id}
                              onBuyClick={props.onBuyClick}
                              item={item}
                              cartData={props.cartData}
                              isClicked={props.isClicked}
                        />
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Main