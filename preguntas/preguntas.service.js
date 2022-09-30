const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Categoria = db.Categorias;

const ObjectId = require('mongodb').ObjectId;

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

async function getPreguntasByCategory (body) {
  console.log('body',body.id)
  const categoria = await Categoria.findById(body.id)
  // console.log(categoria)

  // const categoria = await Categoria.findById(body.id)
  // return await Pregunta.find({ categoria }).limit(5)
  console.log(categoria)

  return await Pregunta.find({ categoria }).limit(5)
}
