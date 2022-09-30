const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require('./_helpers/error-handler');
require('dotenv').config()

const app = express();
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Express API for JSONPlaceholder',
    version: '1.0.0',
  },
};

const options = {
  swaggerDefinition,
  // Paths to files containing OpenAPI definitions
  apis: ['./partidas/*.js','./preguntas/*.js'],
};


const swaggerSpec = swaggerJSDoc(options);

//BodyParser + Cors
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// global error handler
app.use(errorHandler);

//swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// api routes
app.use('/preguntas', require('./preguntas/preguntas.controller'));
app.use('/partidas', require('./partidas/partidas.controller'));
app.use('/categorias', require('./categorias/categorias.controller'));
app.use('/jugador', require('./jugador/jugador.controller'));

// set port, listen for requests
const port = process.env.NODE_ENV === 'DEV' ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});


module.exports = server