const express = require('express')
const ControladorEstudiantes = require('./../controllers/controladorEstudiante');
const routerEstudiantes = express.Router();

routerEstudiantes.get('/estudiante', ControladorEstudiantes.todosLosEstudiantes)
routerEstudiantes.get('/encontrarEstado/:state', ControladorEstudiantes.obtenerPorEstado);
routerEstudiantes.get('/encontrarNumero/:lucky', ControladorEstudiantes.obtenerPorNumeroSuerte);
routerEstudiantes.post('/agregar', ControladorEstudiantes.agregarEstudiante)
routerEstudiantes.delete('/eliminar/:name', ControladorEstudiantes.removerEstudiante )


module.exports = routerEstudiantes;