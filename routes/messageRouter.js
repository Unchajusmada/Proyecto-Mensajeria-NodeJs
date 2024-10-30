const express = require("express")
const messageRouter = express.Router()
let messageIdCounter = 2

module.exports = (messages) => {
  messageRouter.get("/", (req, res) => {
    res.render("mensajes")
  })

  messageRouter.post("/", (req, res) => {
    messages.unshift({
      id: String(++messageIdCounter).padStart(3, "0"),
      title: req.body.title,
      contenido: req.body.message,
      remitente: req.body.remitente,
      importancia: req.body.importancia,
      added: new Date(),
    })
    res.redirect("/")
  })

  return messageRouter
}
