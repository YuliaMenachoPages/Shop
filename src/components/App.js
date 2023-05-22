import React, {useState} from "react"
import {Route, Routes} from 'react-router-dom';
import Header from './Header'
import Main from './Main'
import Cart from './Cart'
import Footer from './Footer'

function App() {
    const [cartData, setCartData] = useState(sessionStorage.getItem('cartData') !== null ? JSON.parse(sessionStorage.getItem('cartData')) : [])
    const [cartCount, setCartCount] = useState(JSON.parse(sessionStorage.getItem('cartData')).length > 0 ? JSON.parse(sessionStorage.getItem('cartData')).map((cartItem) => (cartItem.quantity)).reduce((a, b) => a + b) : 0)

    function handleCartData() {
        setCartData(JSON.parse(sessionStorage.getItem('cartData')))
    }

    function handleBuyClick(item) {
        item["quantity"] = 1
        const cartDataStorage = cartData;
        cartDataStorage.push(item);
        sessionStorage.setItem('cartData', JSON.stringify(cartDataStorage));
        handleCartData();
        handleCartCount()
    }

    function handleDeleteClick(item) {
        const itemToDelete = cartData.filter((itemToStay) => itemToStay.id !== item.id);
        sessionStorage.setItem('cartData', JSON.stringify(itemToDelete));
        handleCartData();
        handleCartCount()
    }

    function handleCartCount() {
        setCartCount(JSON.parse(sessionStorage.getItem('cartData')).length > 0 ? JSON.parse(sessionStorage.getItem('cartData')).map((cartItem) => (cartItem.quantity)).reduce((a, b) => a + b) : 0)
    }

    return (
        <>
            <Header cartCount={cartCount}/>
            <main className="main">
                <Routes>
                    <Route path='/' element={<Main
                        onBuyClick={handleBuyClick}
                        cartData={cartData}
                    />}/>
                    <Route path='/cart' element={<Cart
                        cartData={cartData}
                        onDeleteClick={handleDeleteClick}
                        onCartCount={handleCartCount}
                    />}/>
                </Routes>
            </main>
            <Footer/>
        </>
    )
}

export default App;