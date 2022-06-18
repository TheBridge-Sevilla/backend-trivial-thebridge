const mongoose = require('mongoose');

const preguntaSchema = new mongoose.Schema({
    pregunta: String,
    respuesta: String,
    category: String
})

const Pregunta = mongoose.model('pregunta', preguntaSchema);

module.exports = Pregunta;