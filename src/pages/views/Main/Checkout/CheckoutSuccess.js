import React from 'react'
import {Link} from 'react-router-dom'
const CheckoutSuccess = props => {
    
    return (
        <div>
            <div className="container pb-5 mb-sm-4">
                <div className="pt-5">
                    <div className="card py-3 mt-sm-3">
                        <div className="card-body text-center">
                            <h2 className="h4 pb-3">Thank you for your order!</h2>
                            <p className="font-size-sm mb-2">Your order has been placed and will be processed as soon as possible.</p>
                            <p className="font-size-sm">You will be receiving an email shortly with confirmation of your order.</p>
                            <Link className="btn btn-danger mt-3 mr-3" to="/shop">Go back shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

CheckoutSuccess.propTypes = {

}

export default CheckoutSuccess
