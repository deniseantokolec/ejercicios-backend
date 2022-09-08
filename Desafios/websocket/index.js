const express = require('express')
const path = require('path')
const productsRoutes = require('./routes/productos.js')

const port = 3000 || process.env.PORT;

const app = express();

app.set('views', './views')
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.use('/producto',productsRoutes);

const server =app.listen(port,()=>{
    console.log(`Se está escuchando por el puerto ${port}`);
})
server.on('error',err=>{console.log(err)})