const mongoose = require('mongoose');
require("dotenv").config();

const url = process.env.MONGODB_CONNECTION_STRING;
const Pregunta = require('./app/models/tutorial.model.js');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(url);
}

const pregunta = new Pregunta({
    pregunta: "¿A quién se le atribuye el descubrimiento de la luz?",
    opciones: ["Thomas Edison", "Nikola Tesla", "Alexander Graham", "Albert Einstein"],
    categoria: "Ciencias",
    solucion: "Thomas Edison"
})

const preguntaDos = new Pregunta({
    pregunta: "¿Quién dibujó el cuadro de Gernika?",
    opciones: ["Picasso", "Van Gogh", "Salvador Dali", "Da Vinci"],
    categoria: "Arte",
    solucion: "Picasso"
})

const preguntaTres = new Pregunta({
    pregunta: "¿Cual es la raiz cuadrada de 9?",
    opciones: [3, 8, 2, 5],
    categoria: "Mates",
    solucion: 3
})

const preguntaCuatro = new Pregunta({
    pregunta: "¿Cómo se llama la obra más conocida de Vivaldi?",
    opciones: ["Primavera", "Session8", "Infierno", "Cuatro estaciones"],
    categoria: "Música",
    solucion: "Cuatro estaciones"
})


pregunta.save()
preguntaDos.save()
preguntaTres.save()
preguntaCuatro.save()
