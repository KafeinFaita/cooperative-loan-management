const Session = require('../models/Session');

class SessionController {

    async index(req, res) {
        console.log(req.session.user)
        res.render('login');
    }

    async create(req, res) {
        const user = await Session.createNew(req.body);

        if (user) {
            req.session.user = user;
            res.redirect('/dashboard');
        } else {
            console.log('err');
        }
    }

}

module.exports = new SessionController;