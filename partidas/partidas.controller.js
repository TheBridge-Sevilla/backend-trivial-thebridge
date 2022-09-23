const express = require('express')
const router = express.Router()
const partidasService = require('./partidas.service')

// routes
router.get('/', getAll)
router.post('/', create)

module.exports = router

function getAll (req, res, next) {
  partidasService.getAll()
    .then(partidas => res.json(partidas))
    .catch(err => next(err))
}

<<<<<<< Updated upstream
function create (req, res, next) {
  console.log(req.body)
=======
function getPartidasByCategory (req, res, next) {
    console.log('get-partida', req.body)
    partidasService.getPartidasByCategory(req.body)
      .then(partidas => res.json(partidas))
      .catch(err => next(err))
  }
>>>>>>> Stashed changes

  partidasService.create(req.body)
    .then(partidas => res.json(partidas))
    .catch(err => next(err))
}
