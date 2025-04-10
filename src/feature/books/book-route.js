const express = require('express')
const router = express.Router();
const bookController = require('./book-controller')

router.post('/',bookController.create)
module.exports = router;

