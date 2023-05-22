import React from 'react';
import {useNavigate} from "react-router-dom";

function Header(props) {
    const navigate = useNavigate();

    function goToCart() {
        navigate('/cart', {replace: true})
    }

    function goToMain() {
        navigate('/', {replace: true})
    }

    return (
        <header className="header">
            <button onClick={goToMain} className="header__logo logo">QPICK</button>
            <div className="header__info">
                <div className="header__icons">
                    <button className="header__icon header__icon_type_like"></button>
                    <div className="header__counter-area">
                        <p className="header__counter">2</p>
                    </div>
                </div>
                <div className="header__icons">
                    <button onClick={goToCart} className="header__icon header__icon_type_cart"></button>
                    <div className="header__counter-area">
                        <p className="header__counter">{props.cartCount}</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header