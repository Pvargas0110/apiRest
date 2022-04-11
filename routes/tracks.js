const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/session");
const chekRol = require("../middleware/rol");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItems, updateItems,  deleteItems} = require("../controllers/tracks");

//TODO http://localhost/tracks GET, POST, DELETE, PUT
/**
 * Lista de los items 
**/
router.get("/", authMiddleware, getItems);

/**
 * Obtener detalles de item 
**/
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Crear un registro
 */

router.post("/", authMiddleware, chekRol(["user", "admin"]), validatorCreateItem, createItems);

/**
 * Actualizar un registro
 */

 router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItems);

 /**
 * Obtener detalles de item 
**/
router.delete("/:id", authMiddleware, validatorGetItem, deleteItems);


module.exports = router;