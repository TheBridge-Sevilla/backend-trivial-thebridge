const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({ nombre: { es: String, en: String } });

module.exports = mongoose.model("Categoria", schema);
