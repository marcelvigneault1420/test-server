const pool = require('../index');

class Post {
    static getPosts(page, nb) {
        if (page === undefined) page = 1;
        if (nb === undefined || nb > 20) nb = 20;

        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM post LIMIT $1 OFFSET $2', [
                nb,
                nb * (page - 1)
            ])
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
    static getPostByAuthorId(id, page, nb) {
        if (page === undefined) page = 1;
        if (nb === undefined || nb > 20) nb = 20;

        return new Promise((resolve, reject) => {
            pool.query(
                'SELECT * FROM post WHERE author_id = $1 LIMIT $2 OFFSET $3',
                [id, nb, nb * (page - 1)]
            )
                .then(result => {
                    resolve(result.rows);
                })
                .catch(err => reject(err));
        });
    }
}

module.exports = Post;
