const db = require("../_helpers/db");
const Partidas = db.Partidas;
const Categorias = db.Categorias

module.exports = {
  getAll,
  create,
  getPartidasByCategory,
  getPartidasById,
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
  return await Partidas.find({ categoria: categoriaID }).populate('categoria').sort({puntuacion: -1, fecha: -1}).limit(30);
}

async function getPartidasById(body) {
  const usuario = await Partidas.find({idUsuario: body.id}).populate('categoria').limit(5);
  console.log()
  return usuario
}


