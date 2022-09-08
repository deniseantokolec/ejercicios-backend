const express = require('express')
const router = express.Router();


let listaCarrito=[]

router.get('/',(req,res)=>{
    res.render('carrito',{carrito:listaCarrito})
})

router.get('/agregarcarrito', (req,res)=>{
    res.send('agregarcarrito')
})

//ruta parametrizada
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    let miProducto = listaCarrito.filter(p=>p.id == id);
    if(miProducto.length == 0){
        return res.send(listaCarrito)
    }
    res.send(miProducto)
})
router.post('/addcarrito',(req,res)=>{
    let datos = req.body;
    datos.id=id++;
    listaProductos=[...listaCarrito,datos]
    //almacenar los datos
    res.redirect('/agregarcarrito');
})

router.put('/actual', (req, res) => {
    res.json({
        result: 'ok!',
        id: req.params.id,
        nuevo: req.body
    })
})

router.delete('/carrito/:id', (req,res) =>{
    res.json({
        result: 'ok!',
        id: req.params.id
    })
})
module.exports = router;