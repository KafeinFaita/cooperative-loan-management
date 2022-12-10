const db = require('../config/db');

class UserModel {
    async getAll() {
        const sql = 'SELECT * FROM users;';

        const [ users, _ ] = await db.query(sql)
        return users;
    }
}

module.exports = new UserModel;