const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  ranking: String,
  jugador: String,
  puntuacion: String,
});

module.exports = mongoose.model("Partida", schema);
