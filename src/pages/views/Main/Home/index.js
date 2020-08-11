import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Home = ({ products, onAddToCart }) => {
    const newProducts = [...products].reverse().slice(0, 4);
    console.log(newProducts)
    const onHandleAddToCart = _id => {
        onAddToCart(_id);
        // console.log(_id);
    }
    return (
        <div>
            <section className="container pt-5">
                {/* Heading*/}
                <div className="d-flex flex-wrap justify-content-between align-items-center pt-1 border-bottom pb-4 mb-4">
                <h2 className="h3 mb-0 pt-3 mr-2">New products</h2>
                </div>
                {/* Grid*/}
                <div className="row pt-2 mx-n2">
                {/* Product*/}
                { newProducts.map(({ _id, name, image, price }, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4" key={index}>
                        <div className="card product-card">
                        <Link className="card-img-top d-block overflow-hidden" to={`/products/${_id}`}><img src={image} alt="Product" /></Link>
                        <div className="card-body py-2"><a className="product-meta d-block font-size-xs pb-1" href="#">Headphones</a>
                            <h3 className="product-title font-size-sm"><Link to={`/products/${_id}`}>{name}</Link></h3>
                            <div className="d-flex justify-content-between">
                            <div className="product-price"><span className="text-accent">{price}</span></div>
                            <div className="star-rating"><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" />
                            </div>
                            </div>
                        </div>
                        <div className="card-body card-body-hidden">
                            <button onClick={() => onHandleAddToCart(_id)} className="btn btn-primary btn-sm btn-block mb-2" type="button" data-toggle="toast" data-target="#cart-toast">
                                <i className="czi-cart font-size-sm mr-1" />
                                Add to Cart 
                            </button>
                        </div>
                        </div>
                        <hr className="d-sm-none" />
                    </div>
                )) }
                </div>
            </section>
        </div>
    )
}

Home.propTypes = {

}

export default Home
