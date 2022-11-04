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

/**
 * @swagger
 * /preguntas/categoria:
 *   post:
 *     tags:
 *     - preguntas
 *     summary: Devuelve una lista de preguntas filtrada por la categoria seleccionada.
 *     operationId: categoria._id
 *     requestBody:
 *       description: Envia el ID de la pregunta seleccionada
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                id:
 *                 type: string
 *                 description: El ID de la categoria.
 *                 example: 634ef53c64362d730580cd9a
 *     responses:
 *       200:
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   pregunta:
 *                     type: string
 *                     description: La pregunta del trivial de la categoria elegida.
 *                     example: 
 *                      es: El lugar de nacimiento y muerte de Alberto Durero fue en...
 *                      en: Albrecht Dürer's birthplace and place of death were in...
 *                   opciones:
 *                     description: Las posibles opciones a elegir de la pregunta.
 *                     example: 
 *                      es: [ Augsburgo, Bamberg,Berlín,Nuremberg ]
 *                      en: [ Augsburgo, Bamberg,Berlín,Nuremberg ]  
 *                   _id:
 *                     type: string
 *                     description: El ID de la categoria.
 *                     example: 635102dd9ef0f77c5801cfb4 
 *                   categoria:
 *                     type: string
 *                     description: El ID de la categoria.
 *                     example: 635102dd9ef0f77c5801cfb4 
 *                   solucion:
 *                     type: number
 *                     description: Posicion de la respuesta correcta .
 *                     example: 3                
 */

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