var express = require('express');
var router = express.Router();
const fiscaliasController = require("../controllers/fiscaliasController");

/* GET home page. */
router.get('/', fiscaliasController.index);

module.exports = router;
