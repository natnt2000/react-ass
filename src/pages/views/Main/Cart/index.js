import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
const Cart = ({ cart, onRemoveItemInCart, onRemoveAllItem, onUpdateItemInCart }) => {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.quantity * item.price;
    });
    const onHandleRemoveItemInCart = _id => onRemoveItemInCart(_id);

    const onHandleRemoveAllItem = () => onRemoveAllItem();

    const { register, errors, handleSubmit } = useForm();

    const onHandleSubmitCart = data => {
        const quantityData = Object.keys(data).map(val => Number(data[val]));
        onUpdateItemInCart(quantityData);
    }
    return (
        <div>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start" style={{ backgroundColor: "#5a5c69" }}>
                                <li className="breadcrumb-item"><Link className="text-nowrap" to="/"><i className="czi-home" />Home</Link></li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">Cart</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                        <h1 className="h3 text-light mb-0">Your cart</h1>
                    </div>
                </div>
            </div>

            <div className="container pb-5 mb-2 mb-md-4">
                <form onSubmit={handleSubmit(onHandleSubmitCart)}>
                    <div className="row">
                        {/* List of items*/}
                        <section className="col-lg-8">
                            <div className="d-flex justify-content-between align-items-center pt-3 pb-2 pb-sm-5 mt-1">
                                <h2 className="h6 text-light mb-0">Products</h2><Link className="btn btn-outline-danger btn-sm pl-2" to="/shop"><i className="czi-arrow-left mr-2" />Continue shopping</Link>
                            </div>
                            {/* Item*/}
                            {cart.map((item, index) => (
                                <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom" key={index}>
                                    <div>
                                        <h3 className="product-title font-size-base mb-2">{index + 1}</h3>
                                    </div>
                                    <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
                                        <Link className="d-inline-block mx-auto mr-sm-4" to={`/products/${item._id}`} style={{ width: '10rem' }}>
                                            <img src={item.image} alt={item.name} />
                                        </Link>
                                        <div className="media-body pt-2">
                                            <h3 className="product-title font-size-base mb-2">
                                                <Link to={`/products/${item._id}`}>{item.name}</Link>
                                            </h3>
                                            <div className="font-size-sm"><span className="text-muted mr-2">Category:</span><Link className="font-weight-bold" to={`/categories/${item.category._id}`}>{item.category.name}</Link></div>
                                            <div className="font-size-lg text-danger pt-2">{item.price}</div>
                                        </div>
                                    </div>
                                    <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ maxWidth: '9rem' }}>
                                        <div className="form-group mb-0">
                                            <label className="font-weight-medium" htmlFor="quantity">Quantity</label>
                                            <input
                                                className="form-control"
                                                type="number"
                                                name={item._id}
                                                id="quantity"
                                                message={errors}
                                                defaultValue={item.quantity}
                                                ref={register({ required: true, min: 1 })}
                                            />

                                        </div>
                                    </div>
                                    <button className="btn btn-link px-0 text-danger" type="button" onClick={() => onHandleRemoveItemInCart(item._id)}><i className="czi-trash mr-2" alt="Remove" /></button>
                                </div>
                            ))}
                            
                            {cart.length > 0 ?
                                <div>
                                    <button className="btn btn-primary" type="submit">
                                        <i className="czi-loading font-size-base mr-2" />
                                        Update cart
                                    </button>
                                    
                                    <button className="btn btn-danger float-right" type="button" onClick={onHandleRemoveAllItem}>
                                        <i className="czi-trash font-size-base mr-2" />
                                        Remove all
                                    </button>
                                </div>
                                :
                                <h2>No items in cart. Let's shopping now</h2>
                            }
                        </section>
                        {/* Sidebar*/}
                        {cart.length > 0 ?
                            <aside className="col-lg-4 pt-4 pt-lg-0">
                                <div className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
                                    <div className="text-center mb-4 pb-3 border-bottom">
                                        <h2 className="h6 mb-3 pb-1">Subtotal</h2>
                                        <h3 className="font-weight-normal">{totalPrice}</h3>
                                    </div>
                                    <Link className="btn btn-danger btn-block mt-4" to="/checkout"><i className="czi-card font-size-lg mr-2" />Proceed to Checkout</Link>
                                </div>
                            </aside>
                            :
                            ""
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Cart
