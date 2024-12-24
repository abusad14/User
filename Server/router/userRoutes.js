const {
  Signup,
  deleteUser,
  login,
  getUser,
} = require("../controller/userController");

const router = require("express").Router();

router.post("/user", Signup);
router.get("/user/:id", getUser);
router.post("/login", login);
router.delete("/user/:id", deleteUser);

module.exports = router;
