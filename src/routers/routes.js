const { Router } = require("express");
const ClientController = require("../controllers/ClientsController.js");

const routes = new Router();

routes.get("/", (_req, res) => {
  res.json({ message: "Olá! Seja bem vindo a API de Clientes" });
});

routes.get("/users", ClientController.getAllClients);
routes.get("/users/:id", ClientController.getOneClient);
routes.post('/users', ClientController.createClient);
routes.put('/users/:id', ClientController.updateClient);
routes.delete('/users/:id', ClientController.deleteClient);

module.exports = routes;
