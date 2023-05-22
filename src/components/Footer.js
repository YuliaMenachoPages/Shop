import React from "react"

function Footer() {
    return (
        <footer className="footer">
            <h1 className="footer__logo logo">QPICK</h1>
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li className="footer__nav-item"><a className="footer__nav-link" href="">Избранное</a></li>
                    <li className="footer__nav-item"><a className="footer__nav-link" href="">Корзина</a></li>
                    <li className="footer__nav-item"><a className="footer__nav-link" href="">Контакты</a></li>
                </ul>
            </nav>
            <div>
                <p className="footer__conditions"><a className="footer__nav-link" href="">Условия сервиса</a></p>
                <ul className="footer__langs">
                    <li className="footer__lang-icon"></li>
                    <li className="footer__lang">
                        <button type="button" className="footer__lang-button">Каз</button>
                    </li>
                    <li className="footer__lang">
                        <button type='button' className="footer__lang-button footer__lang-button_active">Рус</button>
                    </li>
                    <li className="footer__lang">
                        <button type="button" className="footer__lang-button">Eng</button>
                    </li>
                </ul>
            </div>
            <ul className="footer__social">
                <li className="footer__icon footer__icon_type_vk"><a href="#"></a></li>
                <li className="footer__icon footer__icon_type_tg"><a href="#"></a></li>
                <li className="footer__icon footer__icon_type_whatsapp"><a href="#"></a></li>
            </ul>
        </footer>)
}

export default Footer