const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find().populate('category').exec();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
});

router.get('/:_id', async (req, res) => {
    try {
        const product = await Product.findOne({_id: req.params._id}).populate('category').exec();
        res.json(product);
    } catch (error) {
        res.json({ message: error });
    }
});

router.post('/', async (req, res) => {
    const product = new Product(req.body);
    try {
        const saveProduct = await product.save();
        res.json(saveProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.put('/:_id', async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(
            { _id: req.params._id },
            {
                $set: req.body
            },
            {
                new: true
            }
        ).populate('category').exec();
        res.json(updateProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

router.delete('/:_id', async (req, res) => {
    try {
        const removeProduct = await Product.deleteOne({ _id: req.params._id });
        res.json(removeProduct);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;