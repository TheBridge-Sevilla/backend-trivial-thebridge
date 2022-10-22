const express = require('express');
const router = express.Router();
const jugadorService = require('./jugador.service')

// routes
router.get('/', getAll);
router.post('/', create);

module.exports = router;


function getAll(req, res, next) {
    jugadorService.getAll()
        .then(jugador => res.json(jugador))
        .catch(err => next(err));
}


function create(req, res, next) {
    console.log(req.body)

    jugadorService.create(req.body)
        .then(jugador => res.json(jugador))
        .catch(err => next(err));
}