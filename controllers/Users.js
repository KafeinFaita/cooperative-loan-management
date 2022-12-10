const User = require('../models/User');

class UserController {
    async index(req, res) {
        const users = await User.getAll();
        res.json(users);
    }

    new(req, res) {
        res.render('users/new');
    }
}

module.exports = new UserController;