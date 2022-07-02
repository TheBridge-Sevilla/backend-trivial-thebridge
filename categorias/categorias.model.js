const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({ nombre: String });

module.exports = mongoose.model("Categoria", schema);
