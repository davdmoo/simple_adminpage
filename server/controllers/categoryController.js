const categoryModel = require("../models/category");

class Category {
  static async getCategories(req, res) {
    try {
      const categories = await categoryModel.find().exec();

      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };

  static async createCategory(req, res) {
    try {
      const { name } = req.body;
      const category = await categoryModel.create({ name });

      res.status(201).json(category);
    } catch (err) {
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
}

module.exports = Category;
