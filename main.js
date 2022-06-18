const mongoose = require('mongoose');
require("dotenv").config();

const url = process.env.MONGODB_CONNECTION_STRING;
const Pregunta = require('./model.js');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(url);
}

const preguntaTest = new Pregunta({
    pregunta: "De que color es el caballo de Santiago",
    respuesta: "Blanco",
    category: "test"
})

preguntaTest.save()