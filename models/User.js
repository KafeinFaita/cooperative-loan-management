const db = require('../config/db');
const bcrypt = require('bcrypt');

class UserModel {
    async getAll() {
        const sql = 'SELECT * FROM users;';

        const [ users, _ ] = await db.query(sql);
        return users;
    }

    async createNew({ username, password, first_name, last_name, middle_name, contact_number, address, email, role }) {
        const sql = "INSERT INTO users (username, password, first_name, last_name, middle_name, contact_number, address, email, role_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
        const hashedPass = await bcrypt.hash(password, 10);

        const [ user, _ ] = await db.execute(sql, [username, hashedPass, first_name, last_name, middle_name, contact_number, address, email, role]);
        return user;
    }
}

module.exports = new UserModel;