const express = require("express");
const { registerUser, getAllUser, deleteUser, updateUser } = require("../controller/userController");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/users").get(getAllUser);
router.route("/user/delete/:id").delete(deleteUser);
router.route("/user/update/:id").put(updateUser);

module.exports = router;