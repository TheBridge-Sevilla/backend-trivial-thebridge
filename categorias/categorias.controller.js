const express = require("express");
const router = express.Router();
const categoriasService = require("./categorias.service");

// routes
router.get("/", getAll);
router.post("/", create);

module.exports = router;

function getAll (req, res, next) {
  categoriasService.getAll()
    .then(categorias => res.json(categorias))
    .catch(err => next(err));
}

function create (req, res, next) {
  console.log(req.body);

  categoriasService.create(req.body)
    .then(categorias => res.json(categorias))
    .catch(err => next(err));
}
