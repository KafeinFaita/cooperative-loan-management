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

    checkRole(role_id) {
        // roles: 1 - admin, 2 - member
        return (req, res, next) => {
            const user = req.session.user;
            if (user) {
                if (user.role_id === role_id) {
                    next();
                } else {
                    res.redirect('/dashboard');
                }
            } else {
                res.redirect('/');
            }
        }
    }
}

module.exports = new Middleware;