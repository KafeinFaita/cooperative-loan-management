const db = require('../config/db');

class LoanTypeModel {
    async getAll() {
        const sql = "SELECT * FROM loan_types;";

        const [ loan_types, _ ] = await db.query(sql);
        return loan_types;
    }
}

module.exports = new LoanTypeModel;