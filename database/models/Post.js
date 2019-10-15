const pool = require('../index');

class Post {
    static getPosts() {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post')
                .then(result => {
                    resolve(result.rows);
                })
                .catch(err => reject(err));
        });
    }
    static getPostById(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post WHERE id = $1', [id])
                .then(result => {
                    if (result.rowCount > 0) {
                        resolve({ success: true, post: result.rows[0] });
                    } else {
                        resolve({ success: false });
                    }
                })
                .catch(err => reject(err));
        });
    }
    static getPostByAuthorId(id) {
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post WHERE author_id = $1', [id])
                .then(result => {
                    resolve(result.rows);
                })
                .catch(err => reject(err));
        });
    }
}

module.exports = Post;
