const db = require("../_helpers/db");
const Pregunta = db.Pregunta;
const Partidas = db.Partidas;

const ObjectId = require("mongodb").ObjectId;

module.exports = {
  getAll,
  create,
  getPreguntasByCategory,
  getRespuestasPreguntas,
};

async function getAll() {
  return await Pregunta.find();
}

async function create(body) {
  const pregunta = new Pregunta(body);
  return await pregunta.save();
}

async function getPreguntasByCategory(body) {
  //Obtenemos el body con la siguiente estructura:
  /* {
  idUsuario: '6Y7OBB2uXeORf3aDc6s9wFpYh3k1',
  nombre: 'David',
  categoria: '6375371dc0c90666117e12c3'
} */
  //Con el id de categoria obtenemos "N" las preguntas de la base de datos con esa categoria
  const preguntaspartidas = await Pregunta.aggregate([
    { $match: { categoria: ObjectId(body.categoria) } },
    { $sample: { size: parseInt(process.env.NUMERO_PREGUNTAS) } },
  ]);

  //Creamos un modelo de partida con los datos obtenidos y los id de las preguntas aleatorias
  let inicializarPartida = {
    idUsuario: body.idUsuario, //id del usuario Firebase
    nombre: body.nombre, //nombre del jugador
    categoria: body.categoria,
    puntuacion: undefined,
    numeroPreguntas: preguntaspartidas.length,
    fecha: new Date(),
  };

  //Generamos una nueva partida en nuestra base de datos para obtener el id para poder añadirle la puntuación más tarde
  let partida = new Partidas(inicializarPartida);
  partida.save();

  //Creamos un nuevo objeto con el id de partida para poder actualizarla al finalizar la partida
  let datosPartida = {
    partidaID: partida._id,
    categoriaID: partida.categoria,
    quiz: preguntaspartidas.map((datos) => {
      return {
        id: datos._id,
        pregunta: datos.pregunta,
        opciones: datos.opciones,
      };
    }),
  };
  return datosPartida;
}

async function getRespuestasPreguntas(body) {

  let partidaActual = await Partidas.findById({ _id: body.partidaID });
  let pregunta = await Pregunta.findOne({ _id: body.preguntaID });

  let solucion = pregunta.solucion === body.respuesta ? true : false;
  solucion ? (partidaActual.partida.splice(body.indice, 0, (100/partidaActual.numeroPreguntas))) : (partidaActual.partida.splice(body.indice, 0, 0));
 
  partidaActual.puntuacion = partidaActual.partida.reduce((a, b) => a + b, 0)
  partidaActual.save();

  return solucion;
}
