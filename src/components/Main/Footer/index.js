import React from 'react'
import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <div>
            <footer className="bg-dark pt-5">
                <div className="container">
                <div className="row pb-2">
                    <div className="col-md-4 col-sm-6">
                    <div className="widget widget-links widget-light pb-2 mb-4">
                        <h3 className="widget-title text-light">Shop departments</h3>
                        <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Sneakers &amp; Athletic</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Athletic Apparel</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Sandals</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Jeans</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Shirts &amp; Tops</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Shorts</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">T-Shirts</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Swimwear</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Clogs &amp; Mules</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Bags &amp; Wallets</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Accessories</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Sunglasses &amp; Eyewear</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Watches</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                    <div className="widget widget-links widget-light pb-2 mb-4">
                        <h3 className="widget-title text-light">Account &amp; shipping info</h3>
                        <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Your account</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Shipping rates &amp; policies</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Refunds &amp; replacements</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Order tracking</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Delivery info</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Taxes &amp; fees</a></li>
                        </ul>
                    </div>
                    <div className="widget widget-links widget-light pb-2 mb-4">
                        <h3 className="widget-title text-light">About us</h3>
                        <ul className="widget-list">
                        <li className="widget-list-item"><a className="widget-list-link" href="#">About company</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Our team</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">Careers</a></li>
                        <li className="widget-list-item"><a className="widget-list-link" href="#">News</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="widget pb-2 mb-4">
                        <h3 className="widget-title text-light pb-1">Stay informed</h3>
                        <form className="cz-subscribe-form validate" action="https://studio.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;id=29ca296126" method="post" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                        <div className="input-group input-group-overlay flex-nowrap">
                            <div className="input-group-prepend-overlay"><span className="input-group-text text-muted font-size-base"><i className="czi-mail" /></span></div>
                            <input className="form-control prepended-form-control" type="email" name="EMAIL" placeholder="Your email" required />
                            <div className="input-group-append">
                            <button className="btn btn-primary" type="submit" name="subscribe">Subscribe*</button>
                            </div>
                        </div>
                        {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                            <input className="cz-subscribe-form-antispam" type="text" name="b_c7103e2c981361a6639545bd5_29ca296126" tabIndex={-1} />
                        </div><small className="form-text text-light opacity-50">*Subscribe to our newsletter to receive early discount offers, updates and new products info.</small>
                        <div className="subscribe-status" />
                        </form>
                    </div>
                    <div className="widget pb-2 mb-4">
                        <h3 className="widget-title text-light pb-1">Download our app</h3>
                        <div className="d-flex flex-wrap">
                        <div className="mr-2 mb-2"><a className="btn-market btn-apple" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a></div>
                        <div className="mb-2"><a className="btn-market btn-google" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
