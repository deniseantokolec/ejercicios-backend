const { Router } = require('express')
const express = require('express')
const app = express()
const router = express.Router('./routes/productos.js')

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
})
server.on('error', error =>console.log(`Error en servidor ${error}`))
  
const {promises:fs} = require ('fs')

class Producto{
    static newId = 0
    constructor(rute){
        this.rute = rute;
    }


    async obtenerTodo(){
        try{
            const objs = await fs.readFile(this.rute)
            return JSON.parse(objs)
        }catch (error){
            return []
        }
    }


    async guardar (obj) {
        let objs = await this.obtenerTodo();
        if(objs.lenght === 0){
            Contenedor.newId = 1;
        }else{
            Contenedor.newId++;
        }
        obj = {id:Date.now(),...obj}
        let datos = [...objs,obj]
        try{
            await fs.writeFile(this.rute,JSON.stringify(datos,null,2))
        }catch (error){
            throw new Error(`Error al guardar los datos en el archivo ${error}`)
        }
    }

    async getPorId (id){
        let objs = await this.obtenerTodo();
        let obj = objs.filter(o=>o.id === id)
        if (obj.length === 0){
            return `El objeto no puede ser obtenido con el ${id}`
        }else{
            return obj
        }

    }


    async modificarInfo (obj){
        let objs = await this.obtenerTodo();
        let index = objs.findIndex(o=>o.id === obj.id)
        objs[index] = obj;
        try{
            await fs.writeFile(this.rute, JSON.stringify(objs,null,2))
        }catch(error){
            `No se pueden leer los datos ${error}`
        }
    }

    async eliminarUno (id){
        let objs = await this.obtenerTodo();
        let obj = objs.filter(o=>o.id != id)
        try{
            await fs.writeFile(this.rute, JSON.stringify(obj,null,2))
        }catch (error){
            return `No se puede borrar el registro ${error}`
        }
    }

    async eliminarTodo(){
        try{
            await fs.writeFile(this.rute,JSON.stringify([],null,2))
        }catch (error){
            return `No se pueden borrar los datos ${error}`
        }
    }
}


let producto = new Producto('./producto.json');
producto.guardar([
    {
    producto: "Escuadra",
    precio: 123.45,
    img: "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
    },
    {
        producto: "Calculadora",
        precio: 234.56,
        img: "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
    },
    {
        producto: "Globo Terraqueo",
        precio: 345.67,
        img: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png"
    }
])
  .then(data=>console.log(data))
  .catch((err=>console.log(err)))

setTimeout(()=>{
    console.log(alumno.obtenerTodo());
    console.log(alumno.getPorId(1));
},2000)
producto.obtenerTodo()
 .then((data)=>console.log(data))
 .catch((err=>console.log(err)))
producto.eliminarUno(2)
 .then((data)=>console.log("se eliminó el registro!"))
 .catch((err=>console.log(err)))
//localhost:3000/modificar/
producto.modificarInfo(
    [
        {
            producto: "Globo Terraqueo",
            precio: 345.67,
            img: "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geography-planet-school-256.png"
        }
    ]
    
)
  .then(data=>console.log(data))
  .catch((err=>console.log(err)))


router.get('/', function(req, res, next) {
    res.send(Producto);
});