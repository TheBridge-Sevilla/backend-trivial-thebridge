const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  idUsuario: String, //id del usuario Firebase
  nombre: String, //nombre del jugador
  categoria: { type: Schema.ObjectId, ref: "Categoria" },
  puntuacion: Number,
  partida: [Number],
  numeroPreguntas: Number,
  fecha: Date,
});

module.exports = mongoose.model("Partida", schema);
