const express = require("express")
const router = express.Router(); 

router.use('/users', require('../feature/users/UserRoute'));
router.use('/books',require('../feature/books/BookRoute'))
 
module.exports = router;
