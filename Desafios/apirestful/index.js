const express = require('express')
const app = express();

const indexRouter = require('./routes/index.js')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api',indexRouter)

const PORT = 3000

const server = app.listen(PORT,()=>{
    console.log(`el servidor esta escuchando en el puerto ${PORT}`);
})
server.on("error",error=>console.log(`Error en servidor ${error}`))