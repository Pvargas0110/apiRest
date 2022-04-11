const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage");
const { getItems, getItem, updateItems, deleteItems, createItems } = require("../controllers/storage");

//TODO http:localhost:3001/api/storage

/**
 * Lista de Items
 */
router.get("/", getItems);
/**
 * Detalle de Item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItems);
/**
 * Crear un item
 */
router.post("/", uploadMiddleware.single("myfile"), createItems);

module.exports = router;