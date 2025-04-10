const express = require("express")
const router = express.Router(); 

router.use('/', require('./index2'));

router.use('/books',require('../feature/books/book-route'))
 
module.exports = router;
