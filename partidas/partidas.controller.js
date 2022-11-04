const express = require("express");
const router = express.Router();
const partidasService = require("./partidas.service");

/**
 * @swagger
 * /partidas:
 *   get:
 *     tags:
 *       - partidas
 *     summary: Devuelve la lista completa de partidas.
 *     description: Devuelve la lista completa de partidas. No se utiliza en nuestro frontEnd.
 *     responses:
 *       200:
 *         description: Una lista de partidas.
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
/**
 * @swagger
 * /partidas/categoria:
 *   post:
 *     tags:
 *     - partidas
 *     summary: Devuelve una lista de partidas clasificadas por categorias.
 *     operationId: categoria._id
 *     requestBody:
 *       description: Crea un nuevo almacen de partidas
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *                 description: El ID de la categoria.
 *                 example: 634ef53d64362d730580cd9c
 *       required: true
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
 *                   id:
 *                     type: string
 *                     description: El ID de la partida.
 *                     example: 634ef53d64362d730580cd9c
 *                   nombre:
 *                     type: string
 *                     description: El nombre del usuario.
 *                     example: Kenny Miller
 *                   categoria:
 *                     type: object
 *                     properties:
 *                       id: 
 *                         type: string
 *                         description: El ID de la categoría a la que hace referencia.
 *                         example: 634ef53d64362d730580cd9c
 *                       nombre:
 *                         type: object
 *                         properties:
 *                           en:
 *                            type: string
 *                            description: Nombre categoría en Inglés
 *                            example: Art
 *                           es:
 *                             type: string
 *                             description: Nombre categoría en Español
 *                             example: Arte
 *                   puntuacion:
 *                     type: integer
 *                     description: La puntuación alcanzada por el usuario.
 *                     example: 10
 *                   fecha:
 *                     type: date
 *                     description: Fecha en que se jugó la partida.
 *                     example: 2022-10-20T08:33:17.400Z                          
 */
router.post("/categoria", getPartidasByCategory);

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
