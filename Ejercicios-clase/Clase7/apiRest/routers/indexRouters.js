const express = require('express')
const router = express.Router();

router.get('/autos/getAll', (req, res)=>{
    res.send({message: 'Recibi una peticion de tipo get getAll'})
})

router.get('/autos/:id', ({params},res)=>{
    console.log(params);
    res.json({msg: 'Recibimos una peticion get', id: params.id})
})

router.get('/autos', ({query},res)=>{
    console.log(query);
    res.json({msg: 'Recibimos una peticion de busqueda de', bsq:query.producto})
})

router.post('/autos/update', ({body},res)=>{
    res.send({msg:'Recibi una peticion tipo post ', name: body.name, apellido: body.lastname})
})

module.exports = router;