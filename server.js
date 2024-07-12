const express = require('express')
const app = express();

const RouterEstudiantes = require('./routes/routerEstudiante'); 

require('./config/baseDatos');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/', RouterEstudiantes);

app.listen(8080, () => {
  console.log('El servidor ya está encendido en el puerto 8080.');
});