import React from 'react'
import PropTypes from 'prop-types'
import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com'
const Checkout = ({ cart, onRemoveCartInLocalStorage }) => {
    let totalPrice = 0;
    let order = ``;
    cart.forEach(item => {
        totalPrice += item.quantity * item.price;
        order += `${item.name}-${item.price}-${item.quantity}  `
    });
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();

    const onHandleSubmitFormCheckout = data => {
        // console.log(data);
        let templateParams = {
            from_name: "Cartzilla",
            to_email: data.email,
            reply_to: "ngocanhphamk4@gmail.com",
            fullname: data.fullname,
            address: data.address,
            phone_number: data.phone_number,
            cartLength: cart.length,
            totalPrice: totalPrice,
            order: order,
            message: data.message
        }
        emailjs.send('default_service', 'sendneworder', templateParams, 'user_X3ECfd9s8DcJ6QvbWUJ2t')
        .then(result => {
            console.log(result);
            onRemoveCartInLocalStorage();
            history.push('/checkout-success');
        });
    }
    return (
        <div>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start" style={{ backgroundColor: "#5a5c69" }}>
                                <li className="breadcrumb-item"><Link className="text-nowrap" to="/"><i className="czi-home" />Home</Link></li>
                                <li className="breadcrumb-item text-nowrap"><Link to="/cart">Cart</Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                        <h1 className="h3 text-light mb-0">Checkout</h1>
                    </div>
                </div>
            </div>
            <div className="container pb-5 mb-2 mb-md-4 mt-5" >
                <div className="row">
                    <section className="col-lg-8">
                        <h2 className="mb-3 border-bottom">Your Infomation</h2>
                        <form onSubmit={handleSubmit(onHandleSubmitFormCheckout)}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="checkout-fn">Fullname</label>
                                        <input 
                                            className="form-control" 
                                            name="fullname" 
                                            type="text" 
                                            id="checkout-fn" 
                                            message={errors}
                                            ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                        />
                                        <p className="text-danger">
                                            {errors.fullname && errors.fullname.type === 'required' && "This field is required"}
                                            {errors.fullname && errors.fullname.type === 'minLength' && "This field is required min length of 5"}
                                            {errors.fullname && errors.fullname.type === 'pattern' && "This field is not empty"}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="checkout-ln">Address</label>
                                        <input 
                                            className="form-control" 
                                            name="address" 
                                            type="text" 
                                            id="checkout-ln" 
                                            message={errors}
                                            ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                        />
                                        <p className="text-danger">
                                            {errors.address && errors.address.type === 'required' && "This field is required"}
                                            {errors.address && errors.address.type === 'minLength' && "This field is required min length of 5"}
                                            {errors.address && errors.address.type === 'pattern' && "This field is not empty"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="checkout-email">E-mail Address</label>
                                        <input 
                                            className="form-control" 
                                            name="email" 
                                            type="email" 
                                            id="checkout-email" 
                                            message={errors}
                                            ref={register({ required: true, pattern: /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm })}
                                        />
                                        <p className="text-danger">
                                            {errors.email && errors.email.type === 'required' && "This field is required"}
                                            {errors.email && errors.email.type === 'pattern' && "Email is invalid"}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="checkout-phone">Phone Number</label>
                                        <input 
                                            className="form-control" 
                                            name="phone_number" 
                                            type="text" 
                                            id="checkout-phone"
                                            message={errors}
                                            ref={register({required: true, pattern: /(0[0-9]{9})/})}
                                        />
                                        <p className="text-danger">
                                            {errors.phone_number && errors.phone_number.type === 'required' && "This field is required"}
                                            {errors.phone_number && errors.phone_number.type === 'pattern' && "Phone Number is invalid"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label htmlFor="checkout-message">Message</label>
                                        <textarea 
                                            className="form-control" 
                                            name="message" 
                                            id="checkout-message"
                                            message={errors}
                                            ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                        />
                                        <p className="text-danger">
                                            {errors.message && errors.message.type === 'required' && "This field is required"}
                                            {errors.message && errors.message.type === 'minLength' && "This field is required min length of 5"}
                                            {errors.message && errors.message.type === 'pattern' && "This field is not empty"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* Navigation (desktop)*/}
                            <div className="d-none d-lg-flex pt-4 mt-3">
                                <div className="w-50 pr-3">
                                    <Link className="btn btn-primary btn-block" role="button" to="/cart">
                                        <i className="czi-arrow-left mt-sm-0 mr-1" />
                                        <span className="d-none d-sm-inline">Back to Cart</span>
                                    </Link>
                                </div>
                                <div className="w-50 pl-2">
                                    <button className="btn btn-danger btn-block" type="submit">
                                        <span className="d-none d-sm-inline">Complete Order</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </section>
                    {/* Sidebar*/}
                    <aside className="col-lg-4 pt-4 pt-lg-0">
                        <div className="cz-sidebar-static rounded-lg box-shadow-lg ml-lg-auto">
                            <div className="widget mb-3">
                                <h2 className="widget-title text-center">Order summary</h2>
                                {cart.map((item, index) => (
                                    <div className="media align-items-center py-2 border-bottom" key={index}>
                                        <Link className="d-block mr-2" to={`/products/${item._id}`}>
                                            <img width={64} src={item.image} alt={item.name} />
                                        </Link>
                                        <div className="media-body">
                                            <h6 className="widget-product-title"><Link to={`/products/${item._id}`}>{item.name}</Link></h6>
                                            <div className="widget-product-meta"><span className="text-accent mr-2">{item.price}</span><span className="text-muted">x {item.quantity}</span></div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <ul className="list-unstyled font-size-sm pb-2 border-bottom">
                                <li className="d-flex justify-content-between align-items-center"><span className="mr-2">Subtotal:</span><span className="text-right">{totalPrice}</span></li>
                            </ul>
                            <h3 className="font-weight-normal text-center my-4">{totalPrice}</h3>

                        </div>
                    </aside>
                </div>

            </div>

        </div>
    )
}

Checkout.propTypes = {

}

export default Checkout
