const fs = require('fs')

const computadora ={
    color: 'Blanco',
    dd:'160gb',
    marca: 'HP',
    encender: function(){

    },
    apagar: ()=>{

    }
}

const info = {
    contStg: '',
    conObj: {},
    tam: 0

}

fs.readFile('./package.json', 'utf-8',(error,contenido)=>{
    if(error){
        return error
    }else{
        info.contStg = contenido,
        info.conObj = JSON.parse(contenido),
        console.log(info);
    }
})