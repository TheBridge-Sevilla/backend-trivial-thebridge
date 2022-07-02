const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  jugador: String,
  puntuacion: String
});

module.exports = mongoose.model("Partida", schema);
