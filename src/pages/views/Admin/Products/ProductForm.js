import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form';
import { Link, useParams, useHistory } from 'react-router-dom';
import { storage } from '../../../../firebase'
import productApiRequest from '../../../../api/productApi';
import categoryApiRequest from '../../../../api/categoryApi';
import { Editor } from '@tinymce/tinymce-react'


const ProductForm = ({ onAdd, title, products, onUpdate }) => {
    const { _id } = useParams();

    const { register, handleSubmit, watch, errors } = useForm();

    const [valueInput, setValueInput] = useState({});
    const [valueTextarea, setValueTextarea] = useState("");
    const [categories, setCategories] = useState([]);
    // console.log(cates);
    const getProduct = async (_id) => {
        const { data } = await productApiRequest.getProductById(_id);
        console.log(data);
        setValueInput({
            ...data,
            category: data.category._id
        });
    }

    const getCategories = async () => {
        const { data } = await categoryApiRequest.getAll();
        setCategories(data);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        // getCategories();
        setCategories(JSON.parse(localStorage.getItem('categories')))
        if (_id) {
            getProduct(_id);
        }
    }, []);

    const onHandleChange = (e) => {
        const { name, value } = e.target;

        setValueInput({
            ...valueInput,
            [name]: value
        })
    }

    const onHandleEditor = (content, editor) => {
        setValueInput({
            ...valueInput,
            detail: content
        })
    }

    const history = useHistory();


    const onHandleSubmit = data => {
        if (data.image[0]) {
            const image = data.image[0];
            const uploadTask = storage.ref(`images/products/${image.name}`).put(image);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images/products")
                        .child(image.name)
                        .getDownloadURL()
                        .then(url => {
                            if (!_id) {
                                onAdd({
                                    ...valueInput,
                                    image: url,
                                    status: Number(data.status),
                                });
                            } else {
                                onUpdate(_id, {
                                    ...valueInput,
                                    image: url,
                                    status: Number(data.status),
                                });
                            }
                        });
                }
            );
        } else {
            onUpdate(_id, {
                ...valueInput,
                status: Number(data.status),
            });
        }

        history.push({
            pathname: "/admin/products",
        });
    }

    return (
        <div>
            <h1 className="h3 mb-2 text-gray-800">{title}</h1>
            <div className="card shadow mb-4">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onHandleSubmit)}>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="nameInput">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        id="nameInput"
                                        defaultValue={valueInput.name}
                                        message={errors}
                                        onChange={onHandleChange}
                                        ref={register({ required: true, minLength: 5, pattern: /([^\s])/ })}
                                    />
                                    {errors.name && errors.name.type === 'required' && (
                                        <p className="text-danger">This field is required</p>
                                    )}

                                    {errors.name && errors.name.type === 'minLength' && (
                                        <p className="text-danger">This field is  required min length of 5</p>
                                    )}
                                    {errors.name && errors.name.type === 'pattern' && (
                                        <p className="text-danger">This field is not empty</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="imageInput">Image</label>
                                    {_id ?
                                        (<div>
                                            <img className="img-thumbnail mb-3" style={{ width: 200 + 'px' }} src={valueInput.image || ""} />
                                        </div>)
                                        : ""
                                    }
                                    <input
                                        type="file"
                                        id="imageInput"
                                        className="form-control"
                                        name="image"
                                        // onChange={onHandleChangFile}
                                        ref={_id ? register({ pattern: /\.(gif|jpe?g|tiff|png|webp|bmp)$/i, max: 2000000 }) : register({ required: true, pattern: /\.(gif|jpe?g|tiff|png|webp|bmp)$/i, max: 2000000 })}
                                    />
                                    {errors.image && errors.image.type === 'required' && (
                                        <p className="text-danger">This field is required</p>
                                    )}
                                    {errors.image && errors.image.type === 'pattern' && (
                                        <p className="text-danger">Image format is invalid</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label>Status</label>
                                    <div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="inStockRadio" defaultValue="1" ref={register({ required: true })} checked={valueInput.status == 1 ? true : false} onChange={onHandleChange}/>
                                            <label className="form-check-label" htmlFor="inStockRadio">In stock</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="radio" name="status" id="outOfStockRadio" defaultValue="0" ref={register({ required: true })} checked={valueInput.status == 0 ? true : false} onChange={onHandleChange}/>
                                            <label className="form-check-label" htmlFor="outOfStockRadio">Out of stock</label>
                                        </div>
                                    </div>
                                    {errors.status && errors.status.type === 'required' && (
                                        <p className="text-danger">This field is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="priceInput">Price</label>
                                    <input
                                        type="number"
                                        id="priceInput"
                                        className="form-control"
                                        name="price"
                                        defaultValue={valueInput.price}
                                        onChange={onHandleChange}
                                        ref={register({ required: true, min: 1 })}
                                    />
                                    {errors.price && errors.price.type === 'required' && (
                                        <p className="text-danger">This field is required</p>
                                    )}
                                    {errors.price && errors.price.type === 'min' && (
                                        <p className="text-danger">This field is required min of 1</p>
                                    )}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="category_id">Category</label>
                                    <select
                                        className="form-control"
                                        id="category_id"
                                        name="category"
                                        ref={register({ required: true })}
                                        value={valueInput.category}
                                        onChange={onHandleChange}
                                    >
                                        <option value="">Choose Category</option>
                                        {categories.map((category, index) => (
                                            <option key={index} value={category._id} > {category.name}</option>
                                        ))}
                                    </select>
                                    {errors.category && errors.category.type === 'required' && (
                                        <p className="text-danger">This field is required</p>
                                    )}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="detailTextarea">Detail</label>
                                    <Editor
                                        value={valueInput.detail}
                                        apiKey="h7v8e62n8em26wqv0skuu6hcu0enocx5xym3lum1ml220pz0"
                                        cloudChannel='5-dev'
                                        init={{
                                            height: 300,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar:
                                                'undo redo | formatselect | bold italic backcolor | \
                                                alignleft aligncenter alignright alignjustify | \
                                                bullist numlist outdent indent | removeformat | help'
                                        }}
                                        onEditorChange={onHandleEditor}
                                    />

                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <Link to="/admin/products" className="btn btn-info ml-2">Cancel</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ProductForm.propTypes = {

}

export default ProductForm
