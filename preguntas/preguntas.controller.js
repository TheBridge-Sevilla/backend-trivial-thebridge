const express = require('express');
const router = express.Router();
const preguntaService = require('./preguntas.service')

// routes
router.get('/', getAll);

module.exports = router;


function getAll(req, res, next) {
    preguntaService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}