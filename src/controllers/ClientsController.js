const database = require('../models')

class ClientController {
    // Get
    static async getAllClients(req, res) {
        try {
            const allClients = await database.Clients.findAll({
                attributes: ['id', 'name', 'email'] }); 
            return res.status(200).json(allClients)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Get By ID
    static async getOneClient(req, res) {
        const { id } = req.params
        try {
            const oneClient = await database.Clients.findOne({
                attributes: { exclude: ['password']}, 
                where: { id: Number(id) } })
            return res.status(200).json(oneClient)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
    // Post
    static async createClient(req, res) {
        const { name, nickname, email, phone, companyThatWorks, password } = req.body;
        const client = { name, nickname, email, phone, companyThatWorks, password };
        // const client = req.body;
        try {
          const createdClient = await database.Clients.create(client);
          return res.status(200).json(createdClient);
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }

    // Put
      static async updateClient(req, res) {
        const { id } = req.params;
        const { name, nickname, email, phone, companyThatWorks, password } = req.body;
        const newClient = { name, nickname, email, phone, companyThatWorks, password };
        try {
          await database.Clients.update(newClient, { where: { id: Number(id) } });
          const updatedClient = await database.Clients.findOne({
            where: { id: Number(id) },
          });
          return res.status(200).json(updatedClient);
        } catch (error) {
          return res.status(500).json(error.messsage);
        }
      }

    // Delete
      static async deleteClient(req, res) {
        const { id } = req.params;
        try {
          await database.Clients.destroy({ where: { id: Number(id) } });
          return res.status(200).json({ message: `Id ${id} deleted!` });
        } catch (error) {
          return res.status(500).json(error.message);
        }
      }
    }

module.exports = ClientController



    