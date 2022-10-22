const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nombre: String, //nombre del jugador
  categoria: { type: Schema.ObjectId, ref: "Categoria" },
  puntuacion: Number,
  fecha: Date,
});

module.exports = mongoose.model("Partida", schema);
