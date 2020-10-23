const express = require('express');
const router = express.Router();
const articuloController = require('../controllers/articuloController');

router.get('/articulos', (req, res) => {
  articuloController.index(req, res);
});

router.get('/articulos/list', (req, res) => {
  articuloController.list(req, res);
});

router.post('/articulos/create', (req, res) => {
    articuloController.create(req, res);
})

module.exports = router;
