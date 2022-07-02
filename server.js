const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./_helpers/error-handler");
require("dotenv").config();

const app = express();

// BodyParser + Cors
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// global error handler
app.use(errorHandler);

// api routes
app.use("/preguntas", require("./preguntas/preguntas.controller"));
app.use("/partidas", require("./partidas/partidas.controller"));
app.use("/categorias", require("./categorias/categorias.controller"));

// set port, listen for requests
const port = process.env.NODE_ENV === "DEV" ? (process.env.PORT || 80) : 4000;
const server = app.listen(port, function () {
  console.log("Server listening on port " + port);
});
