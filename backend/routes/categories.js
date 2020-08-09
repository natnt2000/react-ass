const express = require('express')
const router = express.Router()
const Category = require('../models/Category')
const Product = require('../models/Product')

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find({}).populate('products')
        res.json(categories)
    } catch (error) {
        res.json({ message: error });
    }
})

router.get('/:_id', async (req, res) => {
    try {
        const category = await Category.findById(req.params._id).populate('products')
        res.json(category)
    } catch (error) {
        res.json({ message: error });
    }
})

router.post('/', async (req, res) => {
    const category = new Category(req.body)
    try {
        const saveCategory = await category.save()
        res.json(saveCategory)
    } catch (error) {
        res.json({ message: error });
    }
})

router.put('/:_id', async (req, res) => {
    try {
        const updateCategory = await Category.findByIdAndUpdate(
            { _id: req.params._id },
            {
                $set: req.body
            },
            {
                new: true
            }
        ).populate('products')
        res.json(updateCategory)
    } catch (error) {
        res.json({ message: error })
    }
})

router.delete('/:_id', async (req, res) => {
    try {
        const removeCategory = await Category.deleteOne({ _id: req.params._id })
        const removeAllProductIncategory = await Product.deleteMany({ category: req.params._id }).exec()
        res.json(removeCategory)
    } catch (error) {
        res.json({ message: error })
    }
})

module.exports = router;