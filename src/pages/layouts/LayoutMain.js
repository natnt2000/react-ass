import React from 'react';
import '../assets/main/css/theme.min.css';
import Header from '../../components/Main/Header';
import Footer from '../../components/Main/Footer';
export default ({ children, categories }) => {

    console.log(children);

    return (
        <div>
            <div>
                <Header categories={categories}/>
                <div>
                    {children}
                </div>
                <Footer />
            </div>

        </div>
    )
}
