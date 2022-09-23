const db = require("../_helpers/db");
const Categoria = db.Categorias;

const fetch = (url) =>
import("node-fetch").then(({ default: fetch }) => fetch(url));


fetch(
"https://opentdb.com/api_category.php"
)
.then((response) => response.json())
.then((data) =>
  data.trivia_categories.map((categoria) => {
    let categoriaTransformada = {nombre:{es:undefined,en:categoria.name}}
    let categoriaInsertar = new Categoria(categoriaTransformada)
    categoriaInsertar.save()
  })
)

