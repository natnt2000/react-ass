import http from './http-common';

const getAll = () => {
    return http.get('/api/products');
}

const getProductById = (_id) => {
    return http.get(`/api/products/${_id}`);
}

const create = (data) => {
    return http.post('/api/products', data);
}

const update = (_id, data) => {
    return http.put(`/api/products/${_id}`, data);
}

const remove = (_id) => {
    return http.delete(`/api/products/${_id}`);
}
export default {
    getAll,
    create,
    remove,
    update,
    getProductById
}