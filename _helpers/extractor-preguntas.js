const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Categoria = db.Categorias;

const fetch = (url) =>
import("node-fetch").then(({ default: fetch }) => fetch(url));

let preguntas = [];
let preguntas_transformadas = [];

fetch(
"https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple"
)
.then((response) => response.json())
.then((data) =>
  data.results.map((pregunta) => {
    preguntas.push({
      categoria: pregunta.category,
      pregunta: pregunta.question,
      correcta: pregunta.correct_answer,
      incorrecta: pregunta.incorrect_answers,
    });
  })
)
.then(() => {
  for (let pregunta of preguntas) {
    console.log(pregunta)
    let pregunta_transformada = {pregunta:{en:'hello',es:'hola'},opciones:{en:['one','two','three'],es:['uno','dos','tres']},categoria:undefined,solucion:'0'}
    const preguntaNueva = new Pregunta(pregunta_transformada)
    console.log(preguntaNueva)
    preguntaNueva.save()
    console.log('guardado')

}
});
