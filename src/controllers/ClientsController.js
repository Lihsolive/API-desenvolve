const database = require("../models");

class ClientController {
  // Get
  static async getAllClients(req, res) {
    try {
      const allClients = await database.Clients.findAll({
        attributes: ["id", "name", "email"],
      });
      return res.status(200).json(allClients);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  // Get By ID
  static async getOneClient(req, res) {
    const { id } = req.params;
    try {
      const oneClient = await database.Clients.findOne({
        attributes: { exclude: ["password"] },
        where: { id: Number(id) },
      });
      return res.status(200).json(oneClient);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Post
  static async createClient(req, res) {
    const newClient = req.body;
    try {
      const newClientCreate = await database.Clients.create(newClient);
      return res.status(200).json(newClientCreate);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // Put
  static async updateClient(req, res) {
    const { id } = req.params;
    const newInfo = req.body;
    try {
      await database.Clients.update(newInfo, { where: { id: Number(id) } });
      const clientUpdate = await database.Clients.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(clientUpdate);
    } catch (error) {
        console.log(req.body);
        return res.status(500).json({ message: error.message, errors: error.errors });
    }
  }

  // Delete
  static async deleteClient(req, res) {
    const { id } = req.params;
    try {
      await database.Clients.destroy({ where: { id: Number(id) } });
      return res.status(200).json({ message: `Id ${id} deletado!` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = ClientController;
