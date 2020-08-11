import React from 'react'
import PropTypes from 'prop-types'

const Contact = props => {
    return (
        <div>
            <section className="container-fluid pt-grid-gutter">
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-grid-gutter"><a className="card" href="#map" data-scroll>
                        <div className="card-body text-center"><i className="czi-location h3 mt-2 mb-4 text-primary" />
                            <h3 className="h6 mb-2">Main store address</h3>
                            <p className="font-size-sm text-muted">Trinh Van Bo, Nam Tu Liem, Ha Noi</p>
                            <div className="font-size-sm text-primary">Click to see map<i className="czi-arrow-right align-middle ml-1" /></div>
                        </div></a></div>
                    <div className="col-xl-3 col-md-6 mb-grid-gutter">
                        <div className="card">
                            <div className="card-body text-center"><i className="czi-time h3 mt-2 mb-4 text-primary" />
                                <h3 className="h6 mb-3">Working hours</h3>
                                <ul className="list-unstyled font-size-sm text-muted mb-0">
                                    <li>Mon - Fri: 10AM - 7PM</li>
                                    <li className="mb-0">Sta: 11AM - 5PM</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-grid-gutter">
                        <div className="card">
                            <div className="card-body text-center"><i className="czi-phone h3 mt-2 mb-4 text-primary" />
                                <h3 className="h6 mb-3">Phone numbers</h3>
                                <ul className="list-unstyled font-size-sm mb-0">
                                    <li><span className="text-muted mr-1">For customers:</span><a className="nav-link-style" href="tel:+108044357260">+1 (080) 44 357 260</a></li>
                                    <li className="mb-0"><span className="text-muted mr-1">Tech support:</span><a className="nav-link-style" href="tel:+100331697720">+1 00 33 169 7720</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-grid-gutter">
                        <div className="card">
                            <div className="card-body text-center"><i className="czi-mail h3 mt-2 mb-4 text-primary" />
                                <h3 className="h6 mb-3">Email addresses</h3>
                                <ul className="list-unstyled font-size-sm mb-0">
                                    <li><span className="text-muted mr-1">For customers:</span><a className="nav-link-style" href="mailto:+108044357260">anhpnph07905@fpt.edu.vn</a></li>
                                    <li className="mb-0"><span className="text-muted mr-1">Tech support:</span><a className="nav-link-style" href="mailto:support@example.com">support@example.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid px-0" id="map">
                <div className="row no-gutters">
                    <div className="col-lg-6 iframe-full-height-wrap">
                        <iframe className="iframe-full-height" width={600} height={250} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.863981044336!2d105.7445984148835!3d21.038127785993215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b991d80fd5%3A0x53cefc99d6b0bf6f!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIHRo4buxYyBow6BuaCBGUFQgUG9seXRlY2huaWMgSMOgIE7hu5lp!5e0!3m2!1svi!2s!4v1596961792494!5m2!1svi!2s" />
                    </div>
                    <div className="col-lg-6 px-4 px-xl-5 py-5 border-top">
                        <h2 className="h4 mb-4">Your Information</h2>
                        <form className="needs-validation mb-3" noValidate>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="cf-name">Your name:&nbsp;<span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" id="cf-name" placeholder="John Doe" required />
                                        <div className="invalid-feedback">Please fill in you name!</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="cf-email">Email address:&nbsp;<span className="text-danger">*</span></label>
                                        <input className="form-control" type="email" id="cf-email" placeholder="johndoe@email.com" required />
                                        <div className="invalid-feedback">Please provide valid email address!</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="cf-phone">Your phone:&nbsp;<span className="text-danger">*</span></label>
                                        <input className="form-control" type="text" id="cf-phone" placeholder="+1 (212) 00 000 000" required />
                                        <div className="invalid-feedback">Please provide valid phone number!</div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label htmlFor="cf-subject">Subject:</label>
                                        <input className="form-control" type="text" id="cf-subject" placeholder="Provide short title of your request" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="cf-message">Message:&nbsp;<span className="text-danger">*</span></label>
                                <textarea className="form-control" id="cf-message" rows={6} placeholder="Please describe in detail your request" required defaultValue={""} />
                                <div className="invalid-feedback">Please write a message!</div>
                            </div>
                            <button className="btn btn-primary" type="submit">Send message</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

Contact.propTypes = {

}

export default Contact
