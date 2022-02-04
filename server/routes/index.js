const router = require("express").Router();
const adminController = require("../controllers/adminController");
const categoryController = require("../controllers/categoryController");

router.get("/admins", adminController.getAdmins);
router.post("/admins", adminController.createAdmin);

router.get("/categories", categoryController.getCategories);
router.post("/categories", categoryController.createCategory);

router.get("/admins/:id", adminController.getAdminById);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
