const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  pregunta: { es: String, en: String },
  opciones: { es: [String], en: [String] },
  categoria: { type: Schema.ObjectId, ref: 'Categoria' },
  solucion: {type: Number,required: True}
})

module.exports = mongoose.model("Pregunta", schema);
