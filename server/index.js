require('../config/config');
require('../database/conexion');
const express = require('express');
const app = express();

const path = __dirname + '/views/';

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.urlencoded({extended: true}))
app.use(express.static(path));

app.use(require('../routes/index'))

app.listen(process.env.PORT, ()=>{
    console.log(`El servidor esta escuchando el puerto ${process.env.PORT}`)
})