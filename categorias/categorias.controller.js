const express = require("express");
const router = express.Router();
const categoriasService = require("./categorias.service");

// routes

/**
 * @swagger
 * /categorias:
 *   get:
 *     tags:
 *       - categorias
 *     summary: Devuelve una lista de categorias.
 *     description: Devuelve una lista de categorías desde un archivo JSON. Formado por nombre(es y en) e ID
 *     responses:
 *       200:
 *         description: Una lista de las categorias.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                       nombre:
 *                         type: object
 *                         properties:
 *                           es:
 *                             type: string
 *                             description: El nombre de la categoria en español.
 *                             example: Deportes
 *                           en:
 *                             type: string
 *                             description: El nombre de la categoria en ingles.
 *                             example: Sports
 *                       _id:
 *                         type: string
 *                         description: El ID de la partida.
 *                         example: 634ef53d64362d730580cd9e
 */
router.get("/", getAll);

router.post("/", create);

module.exports = router;

function getAll(req, res, next) {
    categoriasService
        .getAll()
        .then((categorias) => res.json(categorias))
        .catch((err) => next(err));
}

function create(req, res, next) {
    console.log(req.body);

    categoriasService
        .create(req.body)
        .then((categorias) => res.json(categorias))
        .catch((err) => next(err));
}
