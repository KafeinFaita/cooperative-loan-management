const express = require('express');
const UserController = require('./controllers/Users');
const SessionController = require('./controllers/Sessions');
const router = express.Router();

router.get('/users', UserController.index);
router.get('/users/new', UserController.new);
router.post('/users', UserController.create);

router.get('/login', SessionController.index);
router.post('/login', SessionController.create);

module.exports = router;