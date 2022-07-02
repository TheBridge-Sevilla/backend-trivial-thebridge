const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  pregunta: String,
  opciones: [String],
  categoria: { type: Schema.ObjectId, ref: "Categoria" },
  solucion: String
});

module.exports = mongoose.model("Pregunta", schema);
