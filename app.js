const express = require ("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const PersonasRouter = require("./routers/PersonasRouter")
const UsuariosRouter = require("./routers/UsuariosRouter")
const ProductosRouter = require("./routers/ProductosRouter")
const TransaccionesRouter = require("./routers/TransaccionesRouter")
const port = 5000

app.use(cors())
app.use(bodyParser.json())

//Personas
app.use("/personas", PersonasRouter)
app.use("/usuarios", UsuariosRouter)
app.use("/productos", ProductosRouter)
app.use("/transacciones", TransaccionesRouter)

app.listen(port, ()=>{
    return console.log( ` http://localhost:${port}`)
})