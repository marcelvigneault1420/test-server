const express = require('express');

const router = express.Router();

const Post = require('./../database/models/Post');

router.get('/', (req, res, next) => {
    Post.getPosts(req.body.page, req.body.nb)
        .then(result => {
            res.status(200).json({ posts: result });
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    Post.getPostById(req.params.id)
        .then(result => {
            res.status(result.success ? 200 : 404).json(result);
        })
        .catch(err => next(err));
});

module.exports = router;
