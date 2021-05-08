const express = require("express")
const router = express.Router()
const apiRouter = require("./apiRoutes")
const authRouter = require("./authRoutes")


router.use("/api", apiRouter)

router.use("/auth", authRouter)

module.exports = router