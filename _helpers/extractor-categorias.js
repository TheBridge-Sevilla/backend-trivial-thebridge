const translate = require('translate-google')
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

            translate(categoria.name, { to: 'es' }).then(traduccion => {
                let categoriaTransformada = { nombre: { es: traduccion, en: categoria.name } }
                let categoriaInsertar = new Categoria(categoriaTransformada)
                categoriaInsertar.save()
            }).catch(err => {
                console.error(err)
            })
        })
    )
