const express = require('express');

const router = express.Router();

const Author = require('./../database/models/Author');
const Post = require('./../database/models/Post');

router.get('/', (req, res, next) => {
    Author.getAuthors()
        .then(result => {
            res.status(200).json({ authors: result });
        })
        .catch(err => next(err));
});

router.get('/:id', (req, res, next) => {
    Author.getAuthor(req.params.id)
        .then(result => {
            res.status(result.success ? 200 : 404).json(result);
        })
        .catch(err => next(err));
});

router.get('/:id/posts', (req, res, next) => {
    Post.getPostByAuthorId(req.params.id, req.body.page, req.body.nb)
        .then(result => {
            res.status(200).json({ posts: result });
        })
        .catch(err => next(err));
});

module.exports = router;
