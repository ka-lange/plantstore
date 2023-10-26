const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/', authController.getAuth);
// router.get("/login", authController.getLogin);
router.post("/login", authController.loginUser);
// router.get("/register", authController.getSignup);
router.post("/register", authController.registerUser);
router.get("/logout", authController.logoutUser);



module.exports = router