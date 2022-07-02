require("../_helpers/db");

const Pregunta = require("./preguntas.model");

async function listaCategoria () {
  const verCategorias = await Pregunta.find();
  console.log(verCategorias);
}
listaCategoria();
