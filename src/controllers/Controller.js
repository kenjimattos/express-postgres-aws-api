const convertIdToNumber = require("../utils/convertIdToNumber");

class Controller {
  constructor (service) {
    this.service = service;
  }

  async getAll(req,res) {
    try {
      const entries = await this.service.getAll();
      return res.status(200).json(entries);
    } catch(error) {
      //erro
    }
  }

  async getById(req,res) {
    const { id } = req.params;
    try {
      const entry = await this.service.getById(Number(id));
      return res.status(200).json(entry);
    } catch(error) {
      //erro
    }
  }

  async create(req,res) {
    const data = req.body;
    try {
      const newEntry = await this.service.create(data);
      return res.status(200).json(newEntry);
    } catch(error) {
      if (error.name === "SequelizeValidationError") {
        return res.status(400).json({ message: error.errors[0].message });
      }
      return res.status(500).json({ message: error.message });
    }
  }

  async update(req,res) {
    const { ...params } = req.params;
    const newData = req.body;

    const where = convertIdToNumber(params);

    const id = where.id;

    try {
      const isUpdated = await this.service.update(where, newData);
      if (isUpdated) {
        return res.status(200).json({ message: `${this.service.name } ${id} updated successfully.` });
      }
      return res.status(404).json({ message: `Update failed. ${this.service.name } ${id} not found.` });
    } catch(error) {
      //erro
    }
  }

  async delete(req,res) {
    const { ...params } = req.params;

    const where = convertIdToNumber(params);
    const id = where.id;

    try {
      await this.service.delete(where);
      return res.status(200).json({ message: `${this.service.name } ${id} successfully deleted.` });
    } catch(error) {
      //erro
    }
  }

  async restore(req,res) {
    const { ...params } = req.params;

    const where = convertIdToNumber(params);
    const id = where.id;

    try {
      await this.service.restore(where);
      return res.status(200).json({ message: `${this.service.name } ${id} successfully restored.` });
    } catch(error) {
      //erro
    }
  }
}

module.exports = Controller;  