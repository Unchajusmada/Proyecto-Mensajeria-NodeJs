const express = require("express")
const indexRouter = express.Router()

module.exports = (messages) => {
  indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages })
  })

  return indexRouter
}
