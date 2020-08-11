import React from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../../../../components/Pagination'
const Shop = ({ products, categories, productsPerPage, totalProducts, paginate, onAddToCart }) => {
    const onHandleAddToCart = _id => onAddToCart(_id);
    return (
        <div>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start" style={{ backgroundColor: "#5a5c69" }}>
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="czi-home" />Home</a></li>
                                <li className="breadcrumb-item text-nowrap"><a href="#">Shop</a>
                                </li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                        <h1 className="h3 text-light mb-0">Shop</h1>
                    </div>
                </div>
            </div>
            <div className="container pb-5 mb-2 mb-md-4">
                <div className="row">
                    {/* Sidebar*/}
                    <aside className="col-lg-4">
                        {/* Sidebar*/}
                        <div className="cz-sidebar rounded-lg box-shadow-lg" id="shop-sidebar">
                            <div className="cz-sidebar-header box-shadow-sm">
                                <button className="close ml-auto" type="button" data-dismiss="sidebar" aria-label="Close"><span className="d-inline-block font-size-xs font-weight-normal align-middle">Close sidebar</span><span className="d-inline-block align-middle ml-2" aria-hidden="true">×</span></button>
                            </div>
                            <div className="cz-sidebar-body">
                                {/* Categories*/}
                                <div className="widget widget-categories mb-4 pb-4 border-bottom">
                                    <h3 className="widget-title">Categories</h3>
                                    <div className="accordion mt-n1" id="shop-categories">
                                        <div className="card">
                                            <div className="collapse show" id="clothing" data-parent="#shop-categories">
                                                <div className="card-body">
                                                    <div className="widget widget-links cz-filter">
                                                        <ul className="widget-list cz-filter-list pt-1" style={{ height: '12rem' }} data-simplebar data-simplebar-auto-hide="false">
                                                            {categories.map((category, index) => (
                                                                <li key={index} className="widget-list-item cz-filter-item">
                                                                    <Link className="widget-list-link d-flex justify-content-between align-items-center" to={`/categories/${category._id}`}>
                                                                        <span className="cz-filter-item-text">{category.name}</span>
                                                                        <span className="font-size-xs text-muted ml-3">{category.products.length}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Price range*/}
                                <div className="widget mb-4 pb-4 border-bottom">
                                    <h3 className="widget-title">Price</h3>
                                    <div className="cz-range-slider" data-start-min={250} data-start-max={680} data-min={0} data-max={1000} data-step={1}>
                                        <div className="cz-range-slider-ui" />
                                        <div className="d-flex pb-1">
                                            <div className="w-50 pr-2 mr-2">
                                                <div className="input-group input-group-sm">
                                                    <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                                                    <input className="form-control cz-range-slider-value-min" type="text" />
                                                </div>
                                            </div>
                                            <div className="w-50 pl-2">
                                                <div className="input-group input-group-sm">
                                                    <div className="input-group-prepend"><span className="input-group-text">$</span></div>
                                                    <input className="form-control cz-range-slider-value-max" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Filter by Brand*/}
                            </div>
                        </div>
                    </aside>
                    {/* Content  */}
                    <section className="col-lg-8">
                        {/* Toolbar*/}
                        <div className="d-flex justify-content-center justify-content-sm-between align-items-center pt-2 pb-4 pb-sm-5">
                            <div className="d-flex flex-wrap">
                                <div className="form-inline flex-nowrap mr-3 mr-sm-4 pb-3">
                                    <label className="text-light opacity-75 text-nowrap mr-2 d-none d-sm-block" htmlFor="sorting">Sort by:</label>
                                    <select className="form-control custom-select" id="sorting">
                                        <option>Newest</option>
                                        <option>Low - Hight Price</option>
                                        <option>High - Low Price</option>
                                        <option>A - Z Order</option>
                                        <option>Z - A Order</option>
                                    </select><span className="font-size-sm text-light opacity-75 text-nowrap ml-2 d-none d-md-block">of {products.length} products</span>
                                </div>
                            </div>
                        </div>
                        {/* Products grid*/}
                        <div className="row mx-n2">
                            {/* Product*/}
                            {products.map(({ _id, name, image, price }, index) => (
                                <div className="col-md-4 col-sm-6 px-2 mb-4" key={index}>
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
                            ))}
                        </div>
                        <Pagination productsPerPage={productsPerPage} totalProducts={totalProducts} paginate={paginate}/>
                    </section>
                </div>
            </div>
        </div>
    )
}



export default Shop
