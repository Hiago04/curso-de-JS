//forEach

const numeros = [41, 27, 2, 30, 13];

numeros.forEach((valor, indice, array) => { //itera sobre esses valores
    console.log(valor, indice, array)
})
console.log('#################');

let total = 0
numeros.forEach(valor => {
    total += valor
})
console.log(total, ' valor total')




