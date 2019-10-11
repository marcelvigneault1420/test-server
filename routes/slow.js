const express = require('express');

const router = express.Router();

const Slow = require('./../database/models/Slow');

router.get('/', (req, res, next) => {
    Slow.get()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => next(err));
});

module.exports = router;
