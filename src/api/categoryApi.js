import http from './http-common';

const getAll = () => {
    return http.get('/api/categories');
}

const getCategoryById = (_id) => {
    return http.get(`/api/categories/${_id}`);
}

const create = (data) => {
    return http.post('/api/categories', data);
}

const update = (_id, data) => {
    return http.put(`/api/categories/${_id}`, data);
}

const remove = (_id) => {
    return http.delete(`/api/categories/${_id}`);
}

const getProducts = (_id) => {
    return http.get(`/api/categories/${_id}/products`);
}

export default {
    getAll, 
    getCategoryById, 
    create, 
    update, 
    remove,
    getProducts
}