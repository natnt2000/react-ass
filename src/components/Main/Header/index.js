import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Header = ({ categories }) => {
    return (
        <div>
            <header className="box-shadow-sm">

                {/* Remove "navbar-sticky" class to make navigation bar scrollable with the page.*/}
                <div className="navbar-sticky bg-light">
                    <div className="navbar navbar-expand-lg navbar-light">
                        <div className="container"><Link className="navbar-brand d-none d-sm-block mr-3 flex-shrink-0" to="/" style={{ minWidth: '7rem' }}><img width={142} src="https://demo.createx.studio/cartzilla/img/logo-dark.png" alt="Cartzilla" /></Link><a className="navbar-brand d-sm-none mr-2" href="index.html" style={{ minWidth: '4.625rem' }}><img width={74} src="img/logo-icon.png" alt="Cartzilla" /></a>
                            {/* Search*/}
                            <div className="input-group-overlay d-none d-lg-block mx-4">
                                <div className="input-group-prepend-overlay"><span className="input-group-text"><i className="czi-search" /></span></div>
                                <input className="form-control prepended-form-control appended-form-control" type="text" placeholder="Search for products" />
                                <div className="input-group-append-overlay">
                                    <select className="custom-select">
                                        <option>All categories</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category._id}>{category.name}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* Toolbar*/}
                            <div className="navbar-toolbar d-flex flex-shrink-0 align-items-center">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"><span className="navbar-toggler-icon" /></button><a className="navbar-tool navbar-stuck-toggler" href="#"><span className="navbar-tool-tooltip">Expand menu</span>
                                    <div className="navbar-tool-icon-box"><i className="navbar-tool-icon czi-menu" /></div></a><a className="navbar-tool ml-1 ml-lg-0 mr-n1 mr-lg-2" href="#signin-modal" data-toggle="modal">
                                    <div className="navbar-tool-icon-box"><i className="navbar-tool-icon czi-user" /></div>
                                    <div className="navbar-tool-text ml-n3"><small>Hello, Sign in</small>My Account</div></a>
                                <div className="navbar-tool dropdown ml-3"><a className="navbar-tool-icon-box bg-secondary dropdown-toggle" href="shop-cart.html"><span className="navbar-tool-label">4</span><i className="navbar-tool-icon czi-cart" /></a><a className="navbar-tool-text" href="shop-cart.html"><small>My Cart</small>$1,247.00</a>
                                    {/* Cart dropdown*/}
                                    <div className="dropdown-menu dropdown-menu-right" style={{ width: '20rem' }}>
                                        <div className="widget widget-cart px-3 pt-2 pb-3">
                                            <div style={{ height: '15rem' }} data-simplebar data-simplebar-auto-hide="false">
                                                <div className="widget-cart-item pb-2 border-bottom">
                                                    <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v2.html"><img width={64} src="https://demo.createx.studio/cartzilla/img/shop/cart/widget/05.jpg" alt="Product" /></a>
                                                        <div className="media-body">
                                                            <h6 className="widget-product-title"><a href="shop-single-v2.html">Bluetooth Headphones</a></h6>
                                                            <div className="widget-product-meta"><span className="text-accent mr-2">$259.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-cart-item py-2 border-bottom">
                                                    <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v2.html"><img width={64} src="https://demo.createx.studio/cartzilla/img/shop/cart/widget/05.jpg" alt="Product" /></a>
                                                        <div className="media-body">
                                                            <h6 className="widget-product-title"><a href="shop-single-v2.html">Cloud Security Camera</a></h6>
                                                            <div className="widget-product-meta"><span className="text-accent mr-2">$122.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-cart-item py-2 border-bottom">
                                                    <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v2.html"><img width={64} src="https://demo.createx.studio/cartzilla/img/shop/cart/widget/05.jpg" alt="Product" /></a>
                                                        <div className="media-body">
                                                            <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smartphone S10</a></h6>
                                                            <div className="widget-product-meta"><span className="text-accent mr-2">$799.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-cart-item py-2 border-bottom">
                                                    <button className="close text-danger" type="button" aria-label="Remove"><span aria-hidden="true">×</span></button>
                                                    <div className="media align-items-center"><a className="d-block mr-2" href="shop-single-v2.html"><img width={64} src="https://demo.createx.studio/cartzilla/img/shop/cart/widget/05.jpg" alt="Product" /></a>
                                                        <div className="media-body">
                                                            <h6 className="widget-product-title"><a href="shop-single-v2.html">Android Smart TV Box</a></h6>
                                                            <div className="widget-product-meta"><span className="text-accent mr-2">$67.<small>00</small></span><span className="text-muted">x 1</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                <div className="font-size-sm mr-2 py-2"><span className="text-muted">Subtotal:</span><span className="text-accent font-size-base ml-1">$1,247.<small>00</small></span></div><a className="btn btn-outline-secondary btn-sm" href="shop-cart.html">Expand cart<i className="czi-arrow-right ml-1 mr-n1" /></a>
                                            </div><a className="btn btn-primary btn-sm btn-block" href="checkout-details.html"><i className="czi-card mr-2 font-size-base align-middle" />Checkout</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-expand-lg navbar-light navbar-stuck-menu mt-n2 pt-0 pb-2">
                        <div className="container">
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                {/* Search*/}
                                <div className="input-group-overlay d-lg-none my-3">
                                    <div className="input-group-prepend-overlay"><span className="input-group-text"><i className="czi-search" /></span></div>
                                    <input className="form-control prepended-form-control" type="text" placeholder="Search for products" />
                                </div>
                                {/* Departments menu*/}
                                <ul className="navbar-nav mega-nav pr-lg-2 mr-lg-2">
                                    <li className="nav-item dropdown"><a className="nav-link dropdown-toggle pl-0" href="#" data-toggle="dropdown"><i className="czi-menu align-middle mt-n1 mr-2" />Categories</a>
                                        <div className="dropdown-menu">
                                            {categories.map((category, index) => (
                                                <Link key={index} className="dropdown-item" to={`/categories/${category._id}`}>
                                                    {category.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </li>
                                </ul>
                                {/* Primary menu*/}
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to="/" data-toggle="dropdown">Home</Link>
                                    </li>
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to="/shop" data-toggle="dropdown">Shop</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

Header.propTypes = {

}

export default Header
