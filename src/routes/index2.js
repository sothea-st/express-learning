const express = require("express")
const router = express.Router(); 

router.use('/users', require('../feature/users/user-route'));
 
module.exports = router;
