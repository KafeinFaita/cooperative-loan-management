class Middleware {
    redirectLoggedUser(req, res, next) {
        if (req.session.user) {
            res.redirect('/dashboard');
        } else {
            next();
        }
    }

    requireAuth(req, res, next) {
        if (req.session.user) {
            next();
        } else {
            res.redirect('/');
        }
    }
}

module.exports = new Middleware;