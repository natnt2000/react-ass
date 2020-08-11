import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import productApiRequest from '../../../../api/productApi';
import {Link} from 'react-router-dom'
const ProductDetail = ({ products, onAddToCart }) => {
    const { _id } = useParams();
    const [product, setProduct] = useState({});
    const [category, setCategory] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct(_id);
    }, [_id]);

    const getProduct = async (_id) => {
        const { data } = await productApiRequest.getProductById(_id);
        setProduct(data);
        setCategory(data.category);
        console.log(data);
    }
    
    const onHandleAddToCart = _id => onAddToCart(_id);
    return (
        <div>
            <div className="page-title-overlap bg-dark pt-4">
                <div className="container d-lg-flex justify-content-between py-2 py-lg-3">
                    <div className="order-lg-2 mb-3 mb-lg-0 pt-lg-2">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb breadcrumb-light flex-lg-nowrap justify-content-center justify-content-lg-start" style={{ backgroundColor: "#5a5c69" }}>
                                <li className="breadcrumb-item"><a className="text-nowrap" href="index.html"><i className="czi-home" />Home</a></li>
                                <li className="breadcrumb-item text-nowrap"><Link to={`/categories/${category._id}`}>{category.name}</Link>
                                </li>
                                <li className="breadcrumb-item text-nowrap active" aria-current="page">{product.name}</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="order-lg-1 pr-lg-4 text-center text-lg-left">
                        <h1 className="h3 text-light mb-2">{product.name}</h1>
                        <div>
                            <div className="star-rating"><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star-filled active" /><i className="sr-star czi-star" />
                            </div><span className="d-inline-block font-size-sm text-white opacity-70 align-middle mt-1 ml-1">74 Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="bg-light box-shadow-lg rounded-lg">
                    {/* Tabs*/}
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item"><a className="nav-link p-4 active" href="#general" data-toggle="tab" role="tab">General Info</a></li>
                        <li className="nav-item"><a className="nav-link p-4" href="#specs" data-toggle="tab" role="tab">Tech Specs</a></li>
                        <li className="nav-item"><a className="nav-link p-4" href="#reviews" data-toggle="tab" role="tab">Reviews <span className="font-size-sm opacity-60">(74)</span></a></li>
                    </ul>
                    <div className="px-4 pt-lg-3 pb-3 mb-5">
                        <div className="tab-content px-lg-3">
                            {/* General info tab*/}
                            <div className="tab-pane fade show active" id="general" role="tabpanel">
                                <div className="row">
                                    {/* Product gallery*/}
                                    <div className="col-lg-7 pr-lg-0">
                                        <div className="cz-product-gallery">
                                            <div className="cz-preview order-sm-2">
                                                <div className="cz-preview-item active" id="first"><img className="cz-image-zoom" src={product.image} data-zoom="img/shop/single/gallery/05.jpg" alt="Product image" />
                                                    <div className="cz-image-zoom-pane" />
                                                </div>
                                                <div className="cz-preview-item" id="second"><img className="cz-image-zoom" src="img/shop/single/gallery/06.jpg" data-zoom="img/shop/single/gallery/06.jpg" alt="Product image" />
                                                    <div className="cz-image-zoom-pane" />
                                                </div>
                                                <div className="cz-preview-item" id="third"><img className="cz-image-zoom" src="img/shop/single/gallery/07.jpg" data-zoom="img/shop/single/gallery/07.jpg" alt="Product image" />
                                                    <div className="cz-image-zoom-pane" />
                                                </div>
                                                <div className="cz-preview-item" id="fourth"><img className="cz-image-zoom" src="img/shop/single/gallery/08.jpg" data-zoom="img/shop/single/gallery/08.jpg" alt="Product image" />
                                                    <div className="cz-image-zoom-pane" />
                                                </div>
                                            </div>
                                            <div className="cz-thumblist order-sm-1"><a className="cz-thumblist-item active" href="#first"><img src="img/shop/single/gallery/th05.jpg" alt="Product thumb" /></a><a className="cz-thumblist-item" href="#second"><img src="img/shop/single/gallery/th06.jpg" alt="Product thumb" /></a><a className="cz-thumblist-item" href="#third"><img src="img/shop/single/gallery/th07.jpg" alt="Product thumb" /></a><a className="cz-thumblist-item" href="#fourth"><img src="img/shop/single/gallery/th08.jpg" alt="Product thumb" /></a></div>
                                        </div>
                                    </div>
                                    {/* Product details*/}
                                    <div className="col-lg-5 pt-4 pt-lg-0">
                                        <div className="product-details ml-auto pb-3">
                                            <div className="h3 font-weight-normal text-accent mb-3 mr-1">${product.price}</div>
                                            <div className="font-size-sm mb-4"><span className="text-heading font-weight-medium mr-1">Color:</span><span className="text-muted" id="colorOption">Dark blue/Orange</span></div>
                                            <div className="position-relative mr-n4 mb-3">
                                                <div className="custom-control custom-option custom-control-inline mb-2">
                                                    <input className="custom-control-input" type="radio" name="color" id="color1" data-label="colorOption" defaultValue="Dark blue/Orange" defaultChecked />
                                                    <label className="custom-option-label rounded-circle" htmlFor="color1"><span className="custom-option-color rounded-circle" style={{ backgroundColor: '#f25540' }} /></label>
                                                </div>
                                                <div className="custom-control custom-option custom-control-inline mb-2">
                                                    <input className="custom-control-input" type="radio" name="color" id="color2" data-label="colorOption" defaultValue="Dark blue/Green" />
                                                    <label className="custom-option-label rounded-circle" htmlFor="color2"><span className="custom-option-color rounded-circle" style={{ backgroundColor: '#65805b' }} /></label>
                                                </div>
                                                <div className="custom-control custom-option custom-control-inline mb-2">
                                                    <input className="custom-control-input" type="radio" name="color" id="color3" data-label="colorOption" defaultValue="Dark blue/White" />
                                                    <label className="custom-option-label rounded-circle" htmlFor="color3"><span className="custom-option-color rounded-circle" style={{ backgroundColor: '#f5f5f5' }} /></label>
                                                </div>
                                                <div className="custom-control custom-option custom-control-inline mb-2">
                                                    <input className="custom-control-input" type="radio" name="color" id="color4" data-label="colorOption" defaultValue="Dark blue/Black" />
                                                    <label className="custom-option-label rounded-circle" htmlFor="color4"><span className="custom-option-color rounded-circle" style={{ backgroundColor: '#333' }} /></label>
                                                </div>
                                                <div className="product-badge product-available mt-n1"><i className="czi-security-check" />Product available</div>
                                            </div>
                                            <div className="d-flex align-items-center pt-2 pb-4">
                                                <select className="custom-select mr-3" style={{ width: '5rem' }}>
                                                    <option value={1}>1</option>
                                                    <option value={2}>2</option>
                                                    <option value={3}>3</option>
                                                    <option value={4}>4</option>
                                                    <option value={5}>5</option>
                                                </select>
                                                <button className="btn btn-primary btn-shadow btn-block" type="button" onClick={() => onHandleAddToCart(_id)}><i className="czi-cart font-size-lg mr-2" />Add to Cart</button>
                                            </div>
                                            <div className="d-flex mb-4">
                                                <div className="w-100 mr-3">
                                                    <button className="btn btn-secondary btn-block" type="button"><i className="czi-heart font-size-lg mr-2" /><span className="d-none d-sm-inline">Add to </span>Wishlist</button>
                                                </div>
                                                <div className="w-100">
                                                    <button className="btn btn-secondary btn-block" type="button"><i className="czi-compare font-size-lg mr-2" />Compare</button>
                                                </div>
                                            </div>
                                            {/* Product panels*/}

                                            {/* Sharing*/}
                                            <h6 className="d-inline-block align-middle font-size-base my-2 mr-2">Share:</h6><a className="share-btn sb-twitter mr-2 my-2" href="#"><i className="czi-twitter" />Twitter</a><a className="share-btn sb-instagram mr-2 my-2" href="#"><i className="czi-instagram" />Instagram</a><a className="share-btn sb-facebook my-2" href="#"><i className="czi-facebook" />Facebook</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h2>Detail</h2>
                            <div dangerouslySetInnerHTML={{ __html: product.detail }}></div>
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDetail
