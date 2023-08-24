const express = require("express")
const authController = require("./auth-controller")

const router = express.Router()


router.post("/login",authController.logUerIn)


module.exports = router