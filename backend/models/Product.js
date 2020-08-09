const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories'
    },
    status: {
        type: Number,
        required: true
    },
    detail: {
        type: String,
        reqired: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Products', ProductSchema);