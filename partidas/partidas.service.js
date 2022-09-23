const db = require('../_helpers/db')
const Partidas = db.Partidas

module.exports = {
  getAll,
  create
}

async function getAll () {
  return await Partidas.find()
}

<<<<<<< Updated upstream
async function create (body) {
  const partidas = new Partidas(body)
  return await partidas.save()
}
=======
async function getPartidasByCategory(body) {
  const categoria = await Categoria.findOne({ nombre: body.categoria });
  console.log("categoria-partida",categoria)
  return await Partidas.find({ categoria }).populate('categoria').limit(5)
} 
>>>>>>> Stashed changes
