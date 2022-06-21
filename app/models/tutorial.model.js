const mongoose = require('mongoose');

const preguntaSchema = new mongoose.Schema({
    pregunta: String,
    opciones: [{}],
    categoria: String,
    solucion: {}
})

const Pregunta = mongoose.model('pregunta', preguntaSchema);
module.exports = Pregunta;

/* Schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
}); */