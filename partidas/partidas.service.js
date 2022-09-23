const db = require("../_helpers/db");
const Partidas = db.Partidas;

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
  const categoria = await Categoria.findOne({ nombre: body.categoria });
  return await Partidas.find({ categoria }).populate("categoria").limit(5);
}

