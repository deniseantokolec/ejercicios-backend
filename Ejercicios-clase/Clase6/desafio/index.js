const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.send("<h1 style= 'color:Blue'>Nivel 1 <h1>");
})

let visitas = 0;

app.get('/visitas', (req,res)=>{
    visitas++;
    res.send(`La cantidad de visitas es: ${visitas}`);
})

app.get('/fyh', (req,res)=>{
    res.send({fyh: new Date().toLocaleString()});
})

const PORT = 8081
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})

server.on('error', error =>console.log(`Error en servidor ${error}`))