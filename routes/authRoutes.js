const express = require("express")
const router = express.Router()

const {authController} = require("../controllers")

// router.use("/login", authController)

router.post("/signup", authController.signupController)

// router.use("/passwordReset", authController)

module.exports = router