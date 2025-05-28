const { Router } = require('express')
const indexRouter = Router()
const { renderIndex, renderForm, createMessage, renderDetails } = require('../controllers/indexController.js')

indexRouter.get("/", renderIndex)
indexRouter.get("/new", renderForm)
indexRouter.post("/new", createMessage)
indexRouter.get("/details", renderDetails)

module.exports = indexRouter
