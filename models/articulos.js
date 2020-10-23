const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articuloSchema = Schema({
  descripcion: {
    type: String,
    require: [true, 'La descripcion es necesario'],
  },

  precio: {
    type: Schema.Types.Decimal128,
    require: [true, 'El precio es obligatorio'],
  },

  stock: {
    type: Number,
    required: [true, 'El stock es obligatorio'],
  },
});

module.exports = mongoose.model('Articulo', articuloSchema);
