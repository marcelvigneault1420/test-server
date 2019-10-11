const express = require('express');
const server = express();
const moment = require('moment');

require('dotenv').config();

const slowRoute = require('./routes/slow');
server.use('/slow', slowRoute);

server.use((err, req, res, next) => console.log(err));
server.use((req, res, next) =>
    res.status(404).json({ message: 'Route not found' })
);
server.listen(process.env.PORT, () =>
    console.log(
        `Listen on port ${process.env.PORT} | ${moment().format(
            'YYYY/MM/DD HH:mm:ss:SSS'
        )}`
    )
);
