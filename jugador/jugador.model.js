const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  jugadorID: String, // id del jugador
  nombre: String, // nombre del jugador
  email: String,
  puntuacion: Number

})

module.exports = mongoose.model('Jugador', schema)
