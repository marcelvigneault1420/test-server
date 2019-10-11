const pool = require('../index');

class Slow {
    static get() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT pg_sleep(6)')
                .then(result => resolve(result.rows[0]))
                .catch(err => reject(err));
        });
    }
}

module.exports = Slow;
