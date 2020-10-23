const express = require('express');
const app = express();

app.use(require('./login'))
app.use(require('./register'));
app.use(require('./articulos'));

module.exports = app