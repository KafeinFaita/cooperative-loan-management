const db = require('../config/db');

class LoanApplicationModel {

    async getAll() {
        const sql = "SELECT * FROM loan_applications";

        const [ loanApplications, _ ] = await db.query(sql);
        return loanApplications;
    }

    async createNew({ member_id, loan_type_id, purpose }) {
        const sql = "INSERT INTO loan_applications (member_id, loan_type_id, application_date, purpose) VALUES (?, ?, NOW(), ?);";

        const [ loan_application, _ ] = await db.execute(sql, [member_id, loan_type_id, purpose]);
        return loan_application;
    }
}

module.exports = new LoanApplicationModel;