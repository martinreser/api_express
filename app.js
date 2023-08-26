require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('LA SEPTIMAAA')
})

app.get('/', function (req, res) {
    res.json({text:'Estamos en casa'})
  })

app.listen(procces.env.PORT || 3000, () =>{
    console.log(`App escuchando en el puerto ${procces.env.PORT}`)
});