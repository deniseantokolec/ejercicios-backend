const {promises:fs} = require ('fs')

//contenedor de memoria

class Contenedor{
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


let alumno = new Contenedor('./alumno.json');
alumno.guardar({
    "name": "Kate",
    "lastName": "Phillips"
})
  .then(data=>console.log(data))
  .catch((err=>console.log(err)))

setTimeout(()=>{
    console.log(alumno.obtenerTodo());
    console.log(alumno.getPorId(1));
},2000)
alumno.obtenerTodo()
 .then((data)=>console.log(data))
 .catch((err=>console.log(err)))
alumno.eliminarUno(2)
 .then((data)=>console.log("se eliminó el registro!"))
 .catch((err=>console.log(err)))
//localhost:3000/modificar/
alumno.modificarInfo({
    "id": 1659103485065,
    "name": "Kate",
    "lastName": "Chesler"
})
  .then(data=>console.log(data))
  .catch((err=>console.log(err)))
