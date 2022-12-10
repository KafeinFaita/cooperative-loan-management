const express = require('express');
const UserController = require('./controllers/Users')
const router = express.Router();

router.get('/users', UserController.index);
router.get('/users/new', UserController.new);

module.exports = router;