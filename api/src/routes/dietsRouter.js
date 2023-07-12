const { Router } = require("express")
const { getDietsHandler } = require("../handlers/dietsHandler")
const dietsRouter = Router()

dietsRouter.use("/", getDietsHandler)

module.exports = dietsRouter