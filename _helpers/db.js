require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

module.exports = {
  Pregunta: require("../preguntas/preguntas.model"),
  Partidas: require("../partidas/partidas.model"),
  Categorias: require("../categorias/categorias.model")
};
