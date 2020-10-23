const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

router.get('/register', (req, res) => {
  registerController.index(req, res);
});

router.post('/register/addUser', (req, res)=> {
    registerController.register(req, res)
})


module.exports = router;