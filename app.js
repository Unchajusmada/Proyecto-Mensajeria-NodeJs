const express = require("express")
const app = express()
const PORT = 3000
const path = require("node:path")

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

app.use(express.urlencoded({ extended: true })) // Para manejar datos de formularios

const messages = [
  {
    id: "001",
    title: "saludo",
    contenido: "Hi there!",
    remitente: "Amando",
    importancia: "Sin urgencia",
    added: new Date(),
  },
  {
    id: "002",
    title: "Saludo",
    contenido: "Hello World!",
    remitente: "Charles",
    importancia: "Sin urgencia",
    added: new Date(),
  },
]

// Como desde la ruta llamo a una funcion, le paso como parametro el array de messages
const indexRouter = require("./routes/indexRouter")(messages)
app.use("/", indexRouter)
// Igualmente, desde esa ruta llamo a una funcion
const messageRouter = require("./routes/messageRouter")(messages)
app.use("/new", messageRouter)

app.listen(PORT, () => {
  console.log(`La consola esta funcionando en el puerto ${PORT}`)
})
