const path = require('path');
const User = require('../models/user');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/login.html'));
};

exports.auth = (req, res) => {
  let body = req.body;

  console.log(body);

  User.findOne({ email: body.email }, (err, userDB) => {
    if (err) {
      return res.status(500).json({ err });
    }

    if (!userDB) {
      return res.status(400).json({
        err: {
          message: '(Correo) o contraseña incorrectos.',
        },
      });
    }

    if (body.password !== userDB.password) {
      return res.status(400).json({
        err: {
          message: 'Correo o (contraseña) incorrectos.',
        },
      });
    }
    res.redirect('/articulos/list');
  });
};
