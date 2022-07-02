const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  pregunta: String,
  opciones: [String],
  categoria: { type: Schema.ObjectId, ref: "Categoria" },
  solucion: String
});
schema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("Pregunta", schema);
