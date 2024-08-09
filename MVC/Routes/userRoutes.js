const express = require(express);
const router = express.Router();
const userController = require('../Controllers/userController');




router.get("/", (req,res) => {
    userController.getallUsers;
});

module.exports = {router};