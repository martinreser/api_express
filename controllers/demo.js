const axios = require('axios');
const { request, response} = require('express');

const getPeliculas = function (req = request, res = response){
    // Parámetros de URL luego de signo de pregunta
    const {anio, ...resto} = req.query;
    console.log(req.query);
    console.log(resto);
    res.status(200).json({name:`Peliculas del año ${anio}`});
}

const getPelicula = function (req = request, res = response){
    // Parámetros de URL luego de la barra
    const {id} = req.params;
    console.log(id);
    res.json({name:`Pelicula con id: ${id}`});
}

const getEstrenos = function (req = request, res = response){
    res.json({name:'Estrenos'});
}

const getActores = function (req = request, res = response){
    res.json({name:'Actores'});
}

const getNuevasPeliculas = function (req = request, res = response){
    res.json({pelicula:'El Conjuro'});
}

const getOrigenNombre = function (req = request, res = response){
    console.log(req.params);
    const { name } = req.params;

    axios.get(`https://api.nationalize.io/?name=${name}`)
    .then(({ status, data, statusText }) => {
        // handle success
        console.log({ status, data, statusText });
        res.json({
            status,
            data,
            statusText,
            name
        });
    })
    .catch((error) =>{
        // handle error
        console.log(error);
        res.status(400).json({
            status: 400,
            msg:'Error inesperado'});

    });

}

axios.get

module.exports = {
    getPeliculas,
    getEstrenos,
    getActores,
    getPelicula,
    getOrigenNombre, 
    getNuevasPeliculas
};
