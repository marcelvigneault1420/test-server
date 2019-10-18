const express = require('express');
const server = express();
const moment = require('moment');
const cors = require('cors');
const bodyParser = require('body-parser');

require('dotenv').config();

server.use(cors());
server.use(bodyParser.json());

const slowRoute = require('./routes/slow');
const postsRoute = require('./routes/posts');
const authorsRoute = require('./routes/authors');
server.use('/slow', slowRoute);
server.use('/posts', postsRoute);
server.use('/authors', authorsRoute);

server.all('/', (req, res, next) => {
    res.status(200).end('Welcome to my test server');
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({ error: { message: 'Unexpected error' } });
});
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
