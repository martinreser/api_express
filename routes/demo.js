const { Router } = require('express');
const { getEstrenos, getPeliculas, getActores, getPelicula, getOrigenNombre, getNuevasPeliculas } = require('../controllers/demo');

const rutas = Router();

rutas.get('/peliculas', getPeliculas);
rutas.get('/pelicula/:id', getPelicula);

rutas.get('/estrenos', getEstrenos);
rutas.get('/actores', getActores);
rutas.get('/nombre/:name', getOrigenNombre)
rutas.get('/nuevaspeliculas', getNuevasPeliculas);


module.exports = rutas;