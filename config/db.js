require('dotenv').config();
const mysql = require('mysql2');

const pool = mysql.createPool(process.env.DATABASE_URL);

// let sql = 'SELECT * FROM users;';

// pool.execute(sql, (err, result) => {
//     if (err) throw err;

//     result.forEach(res => {
//         console.log(res.username)
//     })
// })

module.exports = pool.promise();
