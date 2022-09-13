const db = require('../_helpers/db')
const Jugador = db.Jugador

module.exports = {
  getAll,
  create
}

async function getAll () {
  return await Jugador.find()
}

async function create (body) {
  const jugador = new Jugador(body)
  return await jugador.save()
}
