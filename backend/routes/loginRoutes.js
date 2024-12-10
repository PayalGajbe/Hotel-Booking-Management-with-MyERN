const express = require('express');
const router = express.Router();
const loginControllers = require("../controllers/loginController.js");

router.post('/login',loginControllers.createLogin);

module.exports = router;