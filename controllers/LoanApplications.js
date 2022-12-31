const LoanType = require('../models/LoanType');
const LoanApplication = require('../models/LoanApplication');

class LoanApplicationController {
    index (req, res) {
        res.render('loan_applications/index');
    }

    async new (req, res) {
        const loanTypes = await LoanType.getAll();
        const { first_name, last_name, id } = req.session.user;
        console.log(loanTypes)
        res.render('loan_applications/new', { loanTypes, first_name, last_name, id });
    }

    async create(req, res) {
        try {
            await LoanApplication.createNew(req.body);
            res.redirect('/dashboard/loan_applications');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new LoanApplicationController;