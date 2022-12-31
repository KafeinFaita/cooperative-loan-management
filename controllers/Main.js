class MainController {
    index (req, res) {
        res.render('index');
    }

    dashboard(req, res) {
        console.log(req.session.user)
        const { first_name, last_name } = req.session.user;
        res.render('dashboard', { first_name, last_name });
    }
}

module.exports = new MainController;