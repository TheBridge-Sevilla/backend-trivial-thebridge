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
  const categoriaID = await Categorias.findById(body.id)
  console.log("categoriaID",categoriaID)
  return await Partidas.find({ categoria: categoriaID }).populate('categoria').limit(5).sort({puntuacion: -1});
}
