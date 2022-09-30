const db = require("../_helpers/db");
const Partidas = db.Partidas;
const Categorias = db.Categorias

module.exports = {
  getAll,
  create,
  getPartidasByCategory,
};

async function getAll() {
  return await Partidas.find();
}

async function create(body) {
  const partidas = new Partidas(body);
  return await partidas.save();
}
async function getPartidasByCategory(body) {
  const categoria = await Categorias.findOne({ nombre: {'es':body.categoria}});
  return await Partidas.find({ categoria }).populate("categoria").limit(5);
}

