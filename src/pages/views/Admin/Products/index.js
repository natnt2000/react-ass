import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductsManager = ({ products, onRemove }) => {
    const removeHandle = (_id) => {
        onRemove(_id)
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Product List</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <Link className="btn btn-primary float-right mb-3" to="/admin/products/add">Create new</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map(({ _id, name, image, price, status, category }, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{name}</td>
                                        <td><img src={image} alt="" width="150" /></td>
                                        <td>{category.name}</td>
                                        <td>{price}</td>
                                        <td>
                                        { status == 1 ? <span className="badge badge-success">In stock</span> : <span className="badge badge-danger">Out of stock</span> }
                                        </td>
                                        <td>
                                            <div className="btn-group">
                                                <Link className="btn btn-info mr-2" to={`/admin/products/${_id}/edit`}>Edit</Link>
                                                <button className="btn btn-danger" onClick={() => removeHandle(_id)}>Remove</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

ProductsManager.propTypes = {

}

export default ProductsManager
