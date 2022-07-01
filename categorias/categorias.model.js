const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    tecnologia: String,
    cultura: String,
    musica: String,
    cine: String,
    deporte: String,
});

module.exports = mongoose.model("Categoria", schema);
