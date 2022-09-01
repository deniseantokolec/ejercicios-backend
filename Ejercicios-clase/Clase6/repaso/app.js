const moment = require('moment')

const hoy = moment()
const nacimiento = moment("23/09/1994","DD/MM/YYYY")

const edadAños = hoy.diff(nacimiento, 'years')
const edadDias = hoy.diff(nacimiento, 'days')

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`);
console.log(`Naci el ${nacimiento.format("DD/MM/YYYY")}`);
console.log(`Desde mi nacimiento han pasado ${edadAños} años y ${edadDias} días`);