const express = require("express");
const router = express.Router();
const checkOrigin = require("../middleware/origin");
const checkAuth = require("../middleware/auth");
const checkRoleAuth = require("../middleware/roleAuth");
const {
  getItems,
  getItem,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/user");
const { validateCreate } = require("../validators/user");

//localhost/user/-->LISTA
router.get("/", checkAuth, checkRoleAuth(["admin"]), getItems);

router.get("/:id", checkOrigin, getItem);//localhost/user/:id-->DETALLE

//TODO: Donde recibimos data
router.post("/", checkOrigin,  validateCreate, createItem);

router.patch("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
