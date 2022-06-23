const db = require('../_helpers/db');
const Pregunta = db.Pregunta;


module.exports = {
    getAll
};

async function getAll() {
    return await Pregunta.find();
}