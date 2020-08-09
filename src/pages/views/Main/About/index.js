import React from 'react'
import PropTypes from 'prop-types'

const About = props => {
    return (
        <div>
            <main className="container-fluid px-0">
                {/* Row: Shop online*/}
                <section className="row no-gutters">
                    <div className="col-md-6 bg-position-center bg-size-cover bg-secondary" style={{ minHeight: '15rem', backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/react-image-upload-2a22a.appspot.com/o/images%2Fabout%2F01%20(1).jpg?alt=media&token=b1ea332a-c120-4162-b78e-26b4c4017f41")` }} />
                    <div className="col-md-6 px-3 px-md-5 py-5">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: '35rem' }}>
                            <h2 className="h3 pb-3">Search, Select, Buy online</h2>
                            <p className="font-size-sm pb-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.</p><a className="btn btn-primary btn-shadow" href="#">View products</a>
                        </div>
                    </div>
                </section>
                {/* Row: Delivery*/}
                <section className="row no-gutters">
                    <div className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2" style={{ minHeight: '15rem', backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/react-image-upload-2a22a.appspot.com/o/images%2Fabout%2F02.jpg?alt=media&token=bd60a9f0-3230-4e07-bab8-affc277f91b9")` }} />
                    <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: '35rem' }}>
                            <h2 className="h3 pb-3">Fast delivery worldwide</h2>
                            <p className="font-size-sm pb-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.</p><a className="btn btn-accent btn-shadow" href="#">Shipping details</a>
                        </div>
                    </div>
                </section>
                {/* Row: Mobile app*/}
                <section className="row no-gutters">
                    <div className="col-md-6 bg-position-center bg-size-cover bg-secondary" style={{ minHeight: '15rem', backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/react-image-upload-2a22a.appspot.com/o/images%2Fabout%2F03.jpg?alt=media&token=d0c7f8a3-2554-4e77-9bab-27b09098f610")` }} />
                    <div className="col-md-6 px-3 px-md-5 py-5">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: '35rem' }}>
                            <h2 className="h3 pb-3">Great mobile app. Shop on the go</h2>
                            <p className="font-size-sm pb-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod. Duis erat lectus, ultrices euismod sagittis at dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.</p><a className="btn-market btn-apple mr-3 mb-3" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">App Store</span></a><a className="btn-market btn-google mb-3" href="#" role="button"><span className="btn-market-subtitle">Download on the</span><span className="btn-market-title">Google Play</span></a>
                        </div>
                    </div>
                </section>
                {/* Section: Shopping outlets*/}
                <section className="row no-gutters">
                    <div className="col-md-6 bg-position-center bg-size-cover bg-secondary order-md-2" style={{ minHeight: '15rem', backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/react-image-upload-2a22a.appspot.com/o/images%2Fabout%2F04.jpg?alt=media&token=a35424ef-a7f3-4fd5-8697-21455b7d8d09")` }} />
                    <div className="col-md-6 px-3 px-md-5 py-5 order-md-1">
                        <div className="mx-auto py-lg-5" style={{ maxWidth: '35rem' }}>
                            <h2 className="h3 pb-3">Shop offline. Cozy outlet stores</h2>
                            <p className="font-size-sm pb-3 text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id purus at risus pellentesque faucibus a quis eros. In eu fermentum leo. Integer ut eros lacus. Proin ut accumsan leo. Morbi vitae est eget dolor consequat aliquam eget quis dolor. Mauris rutrum fermentum erat, at euismod lorem pharetra nec. Duis erat lectus, ultrices euismod sagittis at, pharetra eu nisl. Phasellus id ante at velit tincidunt hendrerit. Aenean dolor dolor tristique nec. Tristique nulla aliquet enim tortor at auctor urna nunc. Sit amet aliquam id diam maecenas ultricies mi eget.</p><a className="btn btn-warning btn-shadow" href="#">See outlet stores</a>
                        </div>
                    </div>
                </section>
                <hr />
                {/* Section: Team*/}
                
                {/* Section: We are hiring*/}
                <hr />
                
            </main>

        </div>
    )
}

About.propTypes = {

}

export default About
