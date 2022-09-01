const numeros = {}
const getAleatorio= () => parseInt(Math.random()*20)+1
//console.log(getAleatorio());

for (let i = 0; i < 10000; i++) {
    let numero = getAleatorio();
    if (!numeros[numero]){
        numeros[numero] = 0
    }
    numeros[numero]++  
}

console.log(numeros);