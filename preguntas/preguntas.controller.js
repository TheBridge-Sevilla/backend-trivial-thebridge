const express = require('express')
const router = express.Router()
const preguntaService = require('./preguntas.service')

/**
 * @swagger
 * /preguntas:
 *   get:
 *     summary: Retrieve a list of JSONPlaceholder users
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
*/
router.get('/', getAll)
router.post('/', create)
router.post('/categoria', getPreguntasByCategory)

module.exports = router

function getAll (req, res, next) {
  preguntaService.getAll()
    .then(preguntas => res.json(preguntas))
    .catch(err => next(err))
}

function getPreguntasByCategory (req, res, next) {
  preguntaService.getPreguntasByCategory(req.body)
    .then(preguntas => res.json(preguntas))
    .catch(err => next(err))
}

function create (req, res, next) {
  console.log(req.body)

  preguntaService.create(req.body)
    .then(preguntas => res.json(preguntas))
    .catch(err => next(err))
}