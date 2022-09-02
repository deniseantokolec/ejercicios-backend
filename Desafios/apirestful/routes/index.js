const express = require('express')
const router = express.Router();

let listaProductos=[
    {id:1 ,title:'Laptop', price:12000,img:"https://images.fravega.com/f1000/5ab6af9703136da67b83d8ffa568ecf0.jpg.webp"},
    {id:2 ,title:"tv32", price:12000,img:"https://medias.musimundo.com/medias/00543026-146105-146105-01-146105-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w2Nzk4NnxpbWFnZS9qcGVnfGhkZi9oODMvMTAzOTA2OTM0MTI4OTQvMDA1NDMwMjYtMTQ2MTA1LTE0NjEwNV8wMS0xNDYxMDVfMDEuanBnX3NpemU1MTV8MzA0YjBkYjBiYTIwMzViNGI2OWNhMWFhNWM3NDMxOTA1ODg1N2RiNTA5NzE2MjhkZjRjODUxNWYzM2RkOTIwMA"},
    {id:3 ,title:"Lavarropas", price:12000,img:"https://images.fravega.com/f1000/b2b41234345073e24bbec07b45ed84fe.jpg.webp"}
]

router.get('/productos',(req,res)=>{
    res.render('productos',{productos:listaProductos})
})

//ruta parametrizada
router.get('/productos/:id',(req,res)=>{
    let id = req.params.id;
    let miProducto = listaProductos.filter(p=>p.id == id);
    if(miProducto.length ==0){
        return res.send(`no existe ese producto`)
    }
    res.send(miProducto)
})
router.post('/productos',(req,res)=>{
    let datos = req.body;
    datos.id=id++;
    listaProductos=[...listaProductos,datos]
    //almacenar los datos
    res.redirect('./productos.js');
})
module.exports = router;