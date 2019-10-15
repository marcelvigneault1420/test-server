const pool = require('../index');

class Author {
    static getAuthors() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM author')
                .then(result => {
                    resolve(result.rows);
                })
                .catch(err => reject(err));
        });
    }
    static getAuthor(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM author WHERE id = $1', [id])
                .then(result => {
                    if (result.rowCount > 0) {
                        resolve({ success: true, author: result.rows[0] });
                    } else {
                        resolve({ success: false });
                    }
                })
                .catch(err => reject(err));
        });
    }
}

module.exports = Author;
