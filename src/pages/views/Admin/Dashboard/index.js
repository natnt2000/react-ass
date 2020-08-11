import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
const Dashboard = ({ products, categories }) => {
    return (
        <div>
            <div>
                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                </div>
                <div className="row">
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <Link className="text-xs font-weight-bold text-primary text-uppercase mb-1" to="/admin/categories">Categories</Link>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{categories.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-list-alt fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Earnings (Monthly) Card Example */}
                    <div className="col-xl-3 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                            <div className="card-body">
                                <div className="row no-gutters align-items-center">
                                    <div className="col mr-2">
                                        <Link className="text-xs font-weight-bold text-success text-uppercase mb-1" to="/admin/products">Products</Link>
                                        <div className="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
                                    </div>
                                    <div className="col-auto">
                                        <i className="fas fa-mobile-alt fa-2x text-gray-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

Dashboard.propTypes = {

}

export default Dashboard
