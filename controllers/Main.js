class MainController {
    index (req, res) {
        res.render('index');
    }

    dashboard(req, res) {
        console.log(req.session.user)
        const { first_name, last_name } = req.session.user;
        res.render('dashboard', { first_name, last_name });
    }

    profile(req, res) {
        const { username, first_name, last_name, middle_name, contact_number, address, email } = req.session.user;
        res.render('profile', { username, first_name, last_name, middle_name, contact_number, address, email });
    }
}

module.exports = new MainController;