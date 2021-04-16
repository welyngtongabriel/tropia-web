const express = require("express");
const routes = express.Router();

routes.get("/", function (req, res) {
  res.send("Bem vindo a tropia!");
});

routes.get("/form", function (req, res) {
  res.send("Página do formulário.");
});
routes.post("/form", function (req, res) {});

module.exports = routes;
