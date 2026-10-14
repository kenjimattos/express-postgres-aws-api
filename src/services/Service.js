const models = require("../database/models");

class Service {
  constructor(modelName) {
    this.model = models[modelName];
    this.name = modelName;
  }

  async getAll() {
    return this.model.findAll();
  }

  async getById(id) {
    return this.model.findByPk(id);
  }

  async create(data) {
    return this.model.create(data);
  }

  async updateById(id, newData) {
    const updatedRows = await this.model.update(newData, { where: { id: id },});

    if (updatedRows[0] > 0) {
      return true;
    }
    return false;
  }

  async deleteById(id) {
    return this.model.destroy({ where: { id: id } });
  }
}

module.exports = Service;
