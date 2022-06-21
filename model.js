const mongoose = require('mongoose');

const preguntaSchema = new mongoose.Schema({
    pregunta: String,
    opciones: [String],
    categoria: String,
    solucion: String
})

const Pregunta = mongoose.model('pregunta', preguntaSchema);

module.exports = Pregunta;