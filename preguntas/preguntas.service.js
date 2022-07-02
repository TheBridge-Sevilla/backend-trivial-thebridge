const db = require("../_helpers/db");
const Pregunta = db.Pregunta;

module.exports = {
  getAll,
  create,
  deleteOne
};

async function getAll () {
  return await Pregunta.find();
}

async function create (body) {
  const pregunta = new Pregunta(body);
  return await pregunta.save();
}

/* exports.delete = (req, res) => {
  const id = req.params.id;
  Pregunta.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `No es posible eliminar la pregunta con id=${id}: la pregunta no ha sido encontrada!`
        });
      } else {
        res.send({
          message: "Pregunta eliminada correctamente"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se ha podido eliminar la pregunta con id=" + id
      });
    });
}; */

async function deleteOne (body) {
  console.log(body)
  return await Pregunta.deleteOne({ id: body.id })
}