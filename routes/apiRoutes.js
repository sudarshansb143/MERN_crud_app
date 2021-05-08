const express = require("express")
const router = express.Router()
const {apiController} = require("../controllers")

router.use("/home", apiController.userHome)



module.exports = router