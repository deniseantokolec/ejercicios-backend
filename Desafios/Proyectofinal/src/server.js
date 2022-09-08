const express = require('express')
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const app = express();

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

let mensajes = []

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html', {root: __dirname})
})

const server = httpServer.listen(8080,()=>{
    console.log(`El servidor está escuchando por el puerto 3000`);
})
server.on('error',(err)=>{
    console.log(err);
})
io.on('connection',socket => {
    console.log('Un cliente se ha conectado');
    socket.emit('msg', mensajes);

    socket.on('new-message',data => {
        messages.push(data);
        io.sockets.emit('msg', mensajes);
    });
 });
