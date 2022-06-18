const mongoose = require('mongoose'); main().catch(err => console.log(err));
require("dotenv").config();

const url = process.env.MONGODB_CONNECTION_STRING;
console.log(url)
async function main() {
    await mongoose.connect('url');
}

const preguntasSchema = new mongoose.Schema({
    pregunta: String,
    respuesta: String,
})

const preguntas = mongoose.model('preguntas', preguntasSchema);