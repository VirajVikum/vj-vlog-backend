const express = require("express");
const router = express.Router();
const controller = require('./controller');

router.get("/users",controller.getUsers);
router.post("/createusers",controller.addUsers);
router.post("/updateusers",controller.updateUser);
router.post("/deleteusers",controller.deleteUser);

module.exports=router;