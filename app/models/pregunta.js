const mongoose = require('mongoose');
require("dotenv").config();

const url = process.env.MONGODB_PREGUNTAS_CONNECTION_STRING;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(url);
}
const preguntaSchema = new mongoose.Schema({
    enunciado: String,
    opciones: [{}],
    categoria: String,
    solucion: {}
})

const Pregunta = mongoose.model('pregunta', preguntaSchema);

//Ejemplo de como crear una pregunta nueva
/* const preguntaUno = new Pregunta({
    pregunta: '¿Como se llama mi gato?'
})
preguntaUno.save() */

Schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});