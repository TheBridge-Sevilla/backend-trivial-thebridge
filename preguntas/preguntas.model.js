const mongoose = require('mongoose')
const Schema = mongoose.Schema

const schema = new Schema({
  pregunta: String,
  opciones: [String],
  categoria: String,
  solucion: String
})

module.exports = mongoose.model('Pregunta', schema)
