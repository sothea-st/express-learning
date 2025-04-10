const express = require('express')
const router = express.Router();
const bookController = require('./BookController')

router.post('/',bookController.create)
module.exports = router;

