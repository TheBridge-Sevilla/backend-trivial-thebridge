const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Categoria = db.Categorias;

const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getAll,
  create,
  getPreguntasByCategory,
};

async function getAll() {
  return await Pregunta.find();
}

async function create(body) {
  const pregunta = new Pregunta(body);
  return await pregunta.save();
}

async function getPreguntasByCategory(body) {
  return await Pregunta.aggregate([{ $match: { categoria: ObjectId(body) } },{ $sample: { size:  parseInt(process.env.NUMERO_PREGUNTAS)}}])
}
