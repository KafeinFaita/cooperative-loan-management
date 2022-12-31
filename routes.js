const express = require('express');
const MainController = require('./controllers/Main');
const UserController = require('./controllers/Users');
const SessionController = require('./controllers/Sessions');
const LoanApplicationController = require('./controllers/LoanApplications');
const Middleware = require('./middleware');
const router = express.Router();

// router.get('/', (req, res) => {
//     if (req.session.user === undefined) {
//         return res.render('index');
//     }
//     console.log(req.session.user);
//     res.redirect('/dashboard');
// })

// router.get('/dashboard', (req, res) => {
//     if (req.session.user === undefined) {
//         return res.redirect('/');
//     }
//     res.render('dashboard');
// })
router.get('/', Middleware.redirectLoggedUser, MainController.index);
router.get('/dashboard', Middleware.requireAuth, MainController.dashboard);
router.get('/dashboard/*', Middleware.requireAuth);

router.get('/users', Middleware.requireAuth, Middleware.checkRole(1), UserController.index);
router.get('/users/new', UserController.new);
router.post('/users', UserController.create);

router.get('/login', Middleware.redirectLoggedUser, SessionController.index);
router.post('/login', SessionController.create);
router.get('/logout', SessionController.destroy);

router.get('/dashboard/loan_applications', LoanApplicationController.index);
router.get('/dashboard/loan_applications/new', LoanApplicationController.new);
router.post('/dashboard/loan_applications', LoanApplicationController.create);

module.exports = router;