const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch (error) {
        res.json({message: error});
    }
});

router.post('/', async (req, res) => {
    const post = new Post({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.json({message: error});
    }
})

router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message: error})
    }
});

router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removePost);
    } catch (error) {
        res.json({message: error});
    }
});

router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(
            { _id: req.params.postId }, 
            { $set: 
                {
                    name: req.body.name,
                    image: req.body.image,
                    price: req.body.price,
                } 
            });
        res.json(updatePost);
    } catch (error) {
        res.json({message: error});
    }
})
module.exports = router;