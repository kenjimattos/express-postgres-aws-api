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
}

module.exports = Controller;  