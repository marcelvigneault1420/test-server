const pool = require('../index');

class Post {
    static getPosts() {
        console.log('get1');
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM POST')
                .then(result => {
                    resolve(result.rows);
                })
                .catch(err => reject(err));
        });
    }
    static getPost(id) {
        console.log('get2');
        return new Promise((resolve, reject) => {
            pool.query('SELECT * FROM POST WHERE id = $1', [id])
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
}

module.exports = Post;
