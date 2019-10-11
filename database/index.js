const pg = require('pg');

const CONN_STRING =
    process.env.DATABASE_URL ||
    `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new pg.Pool({
    connectionString: CONN_STRING,
    max: 10
});

module.exports = pool;
