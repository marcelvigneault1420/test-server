const express = require('express');

const router = express.Router();

const Post = require('./../database/models/Post');

router.get('/', (req, res, next) => {
    Post.getPosts()
        .then(result => {
            res.status(200).json({ posts: result });
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    Post.getPost(req.params.id)
        .then(result => {
            if (result.success) {
                res.status(200).json({ success: true, post: result.post });
            } else {
                res.status(404).json({ success: false });
            }
        })
        .catch(err => next(err));
});

module.exports = router;
