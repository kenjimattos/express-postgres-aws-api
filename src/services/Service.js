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

  async getByScope(scope) {
    return this.model.scope(scope).findAll();
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(where, newData) {
    const updatedRows = await this.model.update(newData, { where } );

    if (updatedRows[0] > 0) {
      return true;
    }
    return false;
  }

  async delete(where) {
    return this.model.destroy({ where });
  }

  async restore(where) {
    return this.model.restore({ where });
  }
}

module.exports = Service;
