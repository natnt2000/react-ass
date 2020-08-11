import React from 'react';
import '../assets/main/css/theme.min.css';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';
export default ({ children, categories, cart, onRemoveItemInCart }) => {

    console.log(children);
    const onHandleRemoveItemInCart = _id => onRemoveItemInCart(_id)
    return (
        <div>
            <div>
                <Header categories={categories} cart={cart} onRemoveItemInCart={onHandleRemoveItemInCart}/>
                <div>
                    {children}
                </div>
                <Footer />
            </div>

        </div>
    )
}
