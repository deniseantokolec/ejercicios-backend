const productos =[
    {id:1, nombre: 'Escuadra', precio: 323.45},
    {id:2, nombre: 'Calculadora', precio: 234.56},
    {id:3, nombre: 'Globo Terraqueo', precio: 45.67},
    {id:4, nombre: 'Paleta Pintura', precio: 456.78},
    {id:5, nombre: 'Reloj', precio: 67.89},
    {id:6, nombre: 'Agenda', precio: 78.90}

]

const getNombres = () => {
    return productos.map(n => n.nombre).join(', ')
}
//console.log(getNombres());

const getPrecioTotal = () =>{
    let total = 0;
    productos.forEach(p=>total+=p.precio)
    return total
}
//console.log(getPrecioTotal());

const precioPromedio = () => {
    return getPrecioTotal()/productos.length
}
//console.log(precioPromedio());

const getProductoMenor = () => {
    let min = productos[0].precio;
    let prod = productos[0].nombre;
    for (const producto of productos) {
        if (producto.precio < min) {
            min = producto.precio;
            prod = producto.nombre
        }
    }
    return prod

}
//console.log(getProductoMenor());

const getProductoMayor = () => {
    let max = productos[0].precio;
    let prod = productos[0].nombre;
    for (const producto of productos) {
        if (producto.precio > max) {
            max = producto.precio;
            prod = producto.nombre
        }
    }
    return prod

}
//console.log(getProductoMayor());

const dosDecimales = (valor) =>{
    return Number(valor.toFixed(2))
}

let info = {
    nombres: getNombres(),
    total:dosDecimales(getPrecioTotal()),
    Preciopromedio: dosDecimales(precioPromedio()),
    Minimo: getProductoMenor(),
    Maximo: getProductoMayor()
}

console.log(info);