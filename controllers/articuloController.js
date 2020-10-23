const path = require('path');
const Articulo = require('../models/articulos');

exports.index = function (req, res) {
  res.sendFile(path.resolve('views/articulos.html'));
};

exports.list = function (req, res) {
  Articulo.find({}).exec((err, articulos) => {
    if (err) {
      return res.send(400, err);
    }
    res.render('articulos', {
      articulos: articulos,
    });
  });
};

exports.create = function (req, res) {
  let body = req.body;
  console.log(body);
  const newArticulo = new Articulo(body);
  newArticulo.save((err) => {
    if (err) {
      return res.status(400).send('No se pudo registrar el Articulo');
    } else {
      return res.redirect('/articulos/list');
    }
  });
};
