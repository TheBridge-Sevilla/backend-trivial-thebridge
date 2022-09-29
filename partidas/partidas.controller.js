const express = require('express');
const router = express.Router();
const partidasService = require('./partidas.service')

// routes
router.get('/', getAll);
router.post('/', create);
router.post('/categoria',getPartidasByCategory)

module.exports = router;


function getAll(req, res, next) {
    partidasService.getAll()
        .then(partidas => res.json(partidas))
        .catch(err => next(err));
}

function getPartidasByCategory (req, res, next) {
    console.log('get-partida', req.body)
    partidasService.getPartidasByCategory(req.body)
      .then(partidas => res.json(partidas))
      .catch(err => next(err))
  }

function create(req, res, next) {
    console.log(req.body)

    partidasService.create(req.body)
        .then(partidas => res.json(partidas))
        .catch(err => next(err));
}