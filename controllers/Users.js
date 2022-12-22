const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.getAll();
        res.json(users);
    }

    new(req, res) {
        res.render('users/new');
    }

    async create(req, res) {
        try {
            await User.createNew(req.body);
            res.redirect('/users');
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UserController;