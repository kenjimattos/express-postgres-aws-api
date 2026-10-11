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
      //erro
    }
  }

  async updateById(req,res) {
    const { id } = req.params;
    const newData = req.body;

    try {
      const isUpdated = await this.service.updateById(Number(id), newData);
      if (isUpdated) {
        return res.status(200).json({ message: "Entry updated successfully." });
      }
      return res.status(404).json({ message: `Update failed. id ${id} not found.` });
    } catch(error) {
      //erro
    }
  }

  async deleteById(req,res) {
    const { id } = req.params;
    try {
      await this.service.deleteById(Number(id));
      return res.status(200).json({ message: `id ${id} successfully deleted.` });
    } catch(error) {
      //erro
    }
  }
}

module.exports = Controller;  