class MainController {
    index (req, res) {
        res.render('index');
    }

    dashboard(req, res) {
        if (req.session.user === undefined) {
            return res.redirect('/');
        }
        res.render('dashboard');
    }
}

module.exports = new MainController;