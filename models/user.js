const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = Schema({
  name: {
    type: String,
    require: [true, 'El nombre es necesario'],
  },

  email: {
    type: String,
    require: [true, 'El correo es obligatorio'],
  },

  password: {
    type: String,
    required: [true, 'La contraseña es obligatorio'],
    hide: true,
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

userSchema.plugin(uniqueValidator, {
  message: '{PATH} debe ser unico',
});

module.exports = mongoose.model('User', userSchema);
