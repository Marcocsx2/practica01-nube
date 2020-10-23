const express = require('express');
const router = express.Router();
const userController = require('../controllers/loginController');

router.get('/', (req, res) => {
  userController.index(req, res);
});

router.post('/login', (req, res) => {
  userController.auth(req, res);
});

module.exports = router;
