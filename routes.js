const express = require('express');
const MainController = require('./controllers/Main');
const UserController = require('./controllers/Users');
const SessionController = require('./controllers/Sessions');
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
router.get('/', MainController.index);
router.get('/dashboard', Middleware.requireAuth, MainController.dashboard);

router.get('/users', UserController.index);
router.get('/users/new', UserController.new);
router.post('/users', UserController.create);

router.get('/login', SessionController.index);
router.post('/login', SessionController.create);

module.exports = router;