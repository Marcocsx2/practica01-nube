const path = require('path');
const User = require('../models/user');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/register.html'));
};

exports.register = (req, res) => {
  let body = req.body;
  console.log(body);

  const newUser = new User(body);
  newUser.save((err) => {
    if (err) {
      return res.status(400).send('No se pudo registrar al usuario');
    } else {
      return res.redirect('/');
    }
  });
};
