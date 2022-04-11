const express = require("express");
const { registerCtrl, loginCtrl } = require("../controllers/auth");
const router = express.Router();
const { validatorRegisterItem, validatorLogin } = require("../validators/auth");

/**
 * Crear un registro
 */
//TODO http://localhost:3001/api/auth/login
//TODO http://localhost:3001/api/auth/register
router.post("/register", validatorRegisterItem, registerCtrl);

router.post("/login", validatorLogin, loginCtrl);

module.exports = router;