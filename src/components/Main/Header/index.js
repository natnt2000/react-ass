import React from 'react'

import { Link } from 'react-router-dom'

const Header = ({ categories, cart, onRemoveItemInCart }) => {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.quantity * item.price;
    });

    const onHandleRemoveItemInCart = _id => onRemoveItemInCart(_id);
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
                                <div className="navbar-tool dropdown ml-3"><Link className="navbar-tool-icon-box bg-secondary dropdown-toggle" to="/cart"><span className="navbar-tool-label">{cart.length}</span><i className="navbar-tool-icon czi-cart" /></Link><Link className="navbar-tool-text" to="/cart"><small>My Cart</small>{totalPrice}</Link>
                                    {/* Cart dropdown*/}
                                    <div className="dropdown-menu dropdown-menu-right" style={{ width: '20rem' }}>
                                        <div className="widget widget-cart px-3 pt-2 pb-3">
                                            <div style={{ height: '15rem' }} data-simplebar data-simplebar-auto-hide="false">
                                                {cart.length === 0 ? <h5>No items in cart. Let's shopping now</h5> : ""}
                                                {cart.map((item, index) => (
                                                    <div className="widget-cart-item pb-2 border-bottom" key={index}>
                                                        <button className="close text-danger" type="button" aria-label="Remove" onClick={() => onHandleRemoveItemInCart(item._id)}><span aria-hidden="true">×</span></button>
                                                        <div className="media align-items-center"><Link className="d-block mr-2" to={`/products/${item._id}`}><img width={64} src={item.image} alt="Product" /></Link>
                                                            <div className="media-body">
                                                                <h6 className="widget-product-title">
                                                                    <Link to={`/products/${item._id}`}>{item.name}</Link>
                                                                </h6>
                                                                <div className="widget-product-meta"><span className="text-accent mr-2">{item.price}</span><span className="text-muted">x {item.quantity}</span></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {cart.length > 0 ? 
                                                <div>
                                                    <div className="d-flex flex-wrap justify-content-between align-items-center py-3">
                                                        <div className="font-size-sm mr-2 py-2">
                                                            <span className="text-muted">Subtotal:</span>
                                                            <span className="text-accent font-size-base ml-1">{totalPrice}</span>
                                                        </div>
                                                        <Link className="btn btn-outline-secondary btn-sm" to="/cart">
                                                            Expand cart
                                                            <i className="czi-arrow-right ml-1 mr-n1" />
                                                        </Link>
                                                    </div>
                                                    <Link className="btn btn-primary btn-sm btn-block" to="/checkout">
                                                        <i className="czi-card mr-2 font-size-base align-middle" />
                                                        Checkout
                                                    </Link>
                                                </div> 
                                                : 
                                                ""
                                            }
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
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to="/about" data-toggle="dropdown">About</Link>
                                    </li>
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to="/contact" data-toggle="dropdown">Contact</Link>
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


export default Header
