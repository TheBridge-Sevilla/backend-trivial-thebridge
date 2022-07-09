const db = require("../_helpers/db");
const Pregunta = db.Pregunta;

module.exports = {
  getAll,
  create,
  deleteOne
};

async function getAll () {
  return await Pregunta.find();
}

async function create (body) {
  const pregunta = new Pregunta(body);
  return await pregunta.save();
}

async function deleteOne (body) {
  console.log(body)
  return await Pregunta.deleteOne({ _id: body.id })
}