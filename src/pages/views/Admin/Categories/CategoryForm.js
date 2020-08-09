import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { Link, useParams, useHistory } from 'react-router-dom';
import { storage } from '../../../../firebase/';
import categoryApiRequest from '../../../../api/categoryApi';

const CategoryForm = ({ onAddCategory, onUpdateCategory }) => {
    const { _id } = useParams();

    const getCategory = async (_id) => {
        const { data } = await categoryApiRequest.getCategoryById(_id);
        setValueInput(data);
    }

    useEffect(() => {
        getCategory(_id);
    }, [])

    const { handleSubmit, register, errors } = useForm();

    const [valueInput, setValueInput] = useState({});

    const history = useHistory();

    const onHandleSubmit = data => {
        if (data.image[0]) {
            const image = data.image[0];
            const uploadTask = storage.ref(`images/categories/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images/categories")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            if (!_id) {
                                onAddCategory({
                                    ...data,
                                    image: url
                                });
                            } else {
                                onUpdateCategory(_id, {
                                    ...data,
                                    image: url
                                })
                            }

                        });
                }
            );
        } else {
            onUpdateCategory(_id, {
                ...data,
                image: valueInput.image
            })
        }
        history.push("/admin/categories");
    }
    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">Add New Category</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="categoryNameInput">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="categoryNameInput"
                                        defaultValue={valueInput.name}
                                        message={errors}
                                        ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                    />
                                    <p className="text-danger">
                                        {errors.name && errors.name.type === "required" && "This field is required"}
                                        {errors.name && errors.name.type === "minLength" && "This field is required min length of 5"}
                                        {errors.name && errors.name.type === "pattern" && "This field is not empty"}
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="categoryDescriptionInput">Description</label>
                                    <input
                                        name="description"
                                        type="text"
                                        className="form-control"
                                        id="categoryDescriptionInput"
                                        defaultValue={valueInput.description}
                                        message={errors}
                                        ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                    />
                                    <p className="text-danger">
                                        {errors.description && errors.description.type === "required" && "This field is required"}
                                        {errors.description && errors.description.type === "minLength" && "This field is required min length of 5"}
                                        {errors.description && errors.description.type === "pattern" && "This field is not empty"}
                                    </p>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="categoryImageInput">Image</label>
                                    <div>
                                        {_id ? <img className="img-thumbnail mb-3" style={{ width: 200 + 'px' }} src={valueInput.image} /> : ""}
                                    </div>
                                    <input
                                        name="image"
                                        type="file"
                                        className="form-control"
                                        id="categoryImageInput"
                                        message={errors}
                                        ref={_id ? register({ pattern: /\.(gif|jpe?g|tiff|png|webp|bmp)$/i }) : register({ required: true, pattern: /\.(gif|jpe?g|tiff|png|webp|bmp)$/i })}
                                    />
                                    <p className="text-danger">
                                        {errors.image && errors.image.type === "required" && "This field is required"}
                                        {errors.image && errors.image.type === "pattern" && "Image format is invalid"}
                                    </p>
                                </div>
                                <div className="btn-group">
                                    <button className="btn btn-primary" type="submit">Submit</button>
                                    <Link to="/admin/categories" className="btn btn-info ml-2">Cancel</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

CategoryForm.propTypes = {

}

export default CategoryForm
