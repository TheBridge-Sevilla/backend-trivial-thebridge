const db = require("../_helpers/db");
const Categoria = db.Categorias;
const deepl = require("deepl-node");
var he = require("he");

const authKey = process.env.DEEPL_API_KEY;
const translator = new deepl.Translator(authKey);

const fetch = (url) =>
  import("node-fetch").then(({ default: fetch }) => fetch(url));

fetch("https://opentdb.com/api_category.php")
  .then((response) => response.json())
  .then((data) =>
    data.trivia_categories.map((categoria) => {
      let categoriasEditadas = he.decode(categoria.name);

      let CategoriaTransformada = {
        nombre: { es: undefined, en: categoriasEditadas },
      };
      const categoriasTraducidas = translator
        .translateText(categoriasEditadas, null, "es")
        .then((res) => {
          let traduccion = res.text;
          CategoriaTransformada.nombre.es = traduccion;
        })
        .then(() => {
          comprobarCategoria(CategoriaTransformada.nombre).then((duplicada) => {
            if (!duplicada) {
              let CategoriaInsertar = new Categoria(CategoriaTransformada);
              CategoriaInsertar.save();
            }
          });
        });
    })
  )
  .catch((err) => {
    console.error(err);
  });

async function comprobarCategoria(tituloCategoria) {
  let categoriaRepetida = await Categoria.find({ nombre: tituloCategoria });
  // Si es true la pregunta está repetida
  return categoriaRepetida.length > 0 ? true : false;
}
