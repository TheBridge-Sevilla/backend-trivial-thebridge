const db = require("../_helpers/db");
const Categoria = db.Categorias;
const Pregunta = db.Pregunta;
const deepl = require("deepl-node");
var he = require("he");

const authKey = process.env.DEEPL_API_KEY;
const translator = new deepl.Translator(authKey);


for(let vueltas=0; vueltas<20; vueltas++){
let categoriaID = {};
Categoria.find()
  .then((categoriaMongo) => {
    for (categoriaLista of categoriaMongo) {
      categoriaID[categoriaLista.nombre.en] = categoriaLista._id;
    }
  })
  .then(() => {
    const fetch = (url) =>
      import("node-fetch").then(({ default: fetch }) => fetch(url));
    fetch("https://opentdb.com/api.php?amount=50&type=multiple")
      .then((response) => response.json())

      .then((data) =>
        data.results.map((res) => {
          let obtenerSolucion = Math.floor(Math.random() * 4);
          let obtenerOpciones = res.incorrect_answers.splice(
            obtenerSolucion,
            res.incorrect_answers.length + 1,
            res.correct_answer
          );

          let todasOpciones = res.incorrect_answers.concat(obtenerOpciones);
          let idCategoria = categoriaID[res.category];
          let preguntasEditadas = he.decode(res.question);
          let opcionesEditadas = todasOpciones.map((opcion) =>
            he.decode(opcion)
          );

          let PreguntaTransformada = {
            pregunta: { es: undefined, en: preguntasEditadas },
            opciones: { es: undefined, en: opcionesEditadas },
            categoria: idCategoria,
            solucion: obtenerSolucion,
          };

          const opcionesTraducidas = translator
            .translateText(opcionesEditadas, null, "es")
            .then((res) => {
              PreguntaTransformada.opciones.es = res.map(
                (opcion) => opcion.text
              );
            })
            .then(() => {
              const preguntaTraducida = translator
                .translateText(preguntasEditadas, null, "es")
                .then((resultado) => {
                  let traduccion = resultado.text;
                  PreguntaTransformada.pregunta.es = traduccion;
                })
                .then(() => {
                  comprobarPregunta(PreguntaTransformada.pregunta).then(
                    (duplicada) => {
                      if (!duplicada) {
                        let PreguntaInsertar = new Pregunta(
                          PreguntaTransformada
                        );
                        PreguntaInsertar.save();
                      }
                    }
                  );
                });
            });
        })
      );
  });

async function comprobarPregunta(tituloPregunta) {
  let preguntaRepetida = await Pregunta.find({ pregunta: tituloPregunta });
  // Si es true la pregunta está repetida
  return preguntaRepetida.length > 0 ? true : false;
}

}
