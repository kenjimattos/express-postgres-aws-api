const models = require("../models");

class Service {
  constructor(modelName) {
    this.model = models[modelName];
  }

  async getAll() {
    return this.model.findAll();
  }
}

module.exports = Service;
