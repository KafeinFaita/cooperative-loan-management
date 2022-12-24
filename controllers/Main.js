class MainController {
    index (req, res) {
        res.render('index');
    }

    dashboard(req, res) {
        res.render('dashboard');
    }
}

module.exports = new MainController;