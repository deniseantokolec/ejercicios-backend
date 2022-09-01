const express = require('express')
const app = express();

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/api/autos', (req,res)=>{
    res.json({mensaje: 'Recibi una peticio de tipo get'})
})

app.post('/api/bicicletas', (req,res)=>{
    res.json({mensaje: 'Recibi una peticio de tipo post'})
})

const PORT = 3030
const server = app.listen(PORT, ()=>{
    console.log(`El servidor esta escuchando en el puerto: ${PORT}`);
})

server.on("error", error=> console.log(`Error en el servidor ${error}`))