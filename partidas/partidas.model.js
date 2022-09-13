const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  jugadorID: String, // id del jugador
  nombre: String, // nombre del jugador
  categoria: { type: Schema.ObjectId, ref: 'Categoria' },
  puntuacion: Number

})

module.exports = mongoose.model('Partida', schema)
