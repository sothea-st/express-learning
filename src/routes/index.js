const express = require("express")
const router = express.Router(); // Creates a mini router (used in routes)

router.use('/users', require('./user_routes'));
 

module.exports = router;
