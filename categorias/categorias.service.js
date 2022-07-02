const db = require("../_helpers/db");
const Categorias = db.Categorias;

module.exports = {
  getAll,
  create
};

async function getAll () {
  return await Categorias.find();
}

async function create (body) {
  const categorias = new Categorias(body);
  return await categorias.save();
}
