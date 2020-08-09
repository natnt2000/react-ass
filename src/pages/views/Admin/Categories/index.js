import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import categoryApiRequest from '../../../../api/categoryApi';

const CategoryList = ({categories, onRemoveCategory}) => {
    const onHandleRemoveCategory = _id => {
        onRemoveCategory(_id);
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Category List</h1>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <Link className="btn btn-primary float-right mb-3" to="/admin/categories/add">Create new</Link>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Total Product</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {categories.map((category, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{category.name}</td>
                                        <td>
                                            <img className='img-thumbnail' width="150" src={category.image} />
                                        </td>
                                        <td>{category.products.length}</td>
                                        <td>
                                            <div className="btn-group">
                                                <Link className="btn btn-info mr-2" to={`/admin/categories/${category._id}/edit`}>Edit</Link>
                                                <button className="btn btn-danger" onClick={() => onHandleRemoveCategory(category._id)}>Remove</button>
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

CategoryList.propTypes = {

}

export default CategoryList
