const express = require("express");
const router = express.Router();
const partidasService = require("./partidas.service");

/**
 * @swagger
 * /partidas:
 *   get:
 *     summary: Devuelve una lista de partidas.
 *     description: Retrieve a list of users from JSONPlaceholder. Can be used to populate a list of fake users when prototyping or testing an API.
 *     responses:
 *       200:
 *         description: A list of users.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                       _id:
 *                         type: string
 *                         description: El ID de la partida.
 *                         example: 635102dd9ef0f77c5801cfb4
 *                       nombre:
 *                         type: string
 *                         description: El nombre del usuario.
 *                         example: Kenny Miller
 *                       categoria:
 *                         type: string
 *                         description: El ID de la categoría a la que hace referencia.
 *                         example: 634ef53d64362d730580cd9c (Deportes)
 *                       puntuacion:
 *                         type: integer
 *                         description: La puntuación alcanzada por el usuario.
 *                         example: 10
 *                       fecha:
 *                         type: date
 *                         description: Fecha en que se jugó la partida.
 *                         example: 2022-10-20T08:33:17.400Z
 *                          
 */
router.get("/", getAll);
router.post("/", create);
router.post("/categoria", getPartidasByCategory);
/**
 * @swagger
 * /partidas/categoria:
 *   post:
 *     tags:
 *      - partidas 
 *     summary: Devuelve una lista de preguntas filtrada por la categoria seleccionada.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pregunta:
 *                 type: string
 *                 description: La pregunta del trivial de la categoria elegida.
 *                 example: 
 *                  es: El lugar de nacimiento y muerte de Alberto Durero fue en...
 *                  en: Albrecht Dürer's birthplace and place of death were in...
 *               opciones:
 *                 type: string
 *                 description: Las posibles opciones a elegir de la pregunta.
 *                 example: 
 *                  es: Augsburgo
 *                  en: Augsburgo
 *               solucion:
 *                 type: number
 *                 description: Posicion de la respuesta correcta .
 *                 example: 3
 *                          
 */

module.exports = router;

function getAll(req, res, next) {
  partidasService
    .getAll()
    .then((partidas) => res.json(partidas))
    .catch((err) => next(err));
}

function getPartidasByCategory(req, res, next) {
  console.log("get-partida", req.body);
  partidasService
    .getPartidasByCategory(req.body)
    .then((partidas) => res.json(partidas))
    .catch((err) => next(err));
}


function create(req, res, next) {
  console.log(req.body);

  partidasService
    .create(req.body)
    .then((partidas) => res.json(partidas))
    .catch((err) => next(err));
}
