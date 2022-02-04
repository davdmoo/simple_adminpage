const adminModel = require("../models/admin");

class Admin {
  static async getAdmins(req, res) {
    try {
      const admins = await adminModel.find().populate("category").exec();

      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static async createAdmin(req, res) {
    try {
      const { category, name, email, phoneNumber } = req.body;
      const admin = await adminModel.create({ name, email, phoneNumber, category });

      res.status(201).json(admin);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  static async updateAdmin(req, res) {
    try {
      const { id } = req.params;
      const { category, name, email, phoneNumber } = req.body;
      const admin = await adminModel.findById(id);
      if (!admin) res.status(404).json({ message: "Admin not found" });

      await adminModel.updateOne({ _id: id }, { category, name, email, phoneNumber });

      res.status(200).json({ message: "Admin's profile has been updated" });
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static async deleteAdmin(req, res) {
    try {
      const { id } = req.params;
      const admin = await adminModel.findById(id);
      if (!admin) res.status(404).json({ message: "Admin not found"});
      
      await adminModel.deleteOne({ _id: id });
      
      res.status(200).json({ message: "Admin has been deleted" });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Admin;
