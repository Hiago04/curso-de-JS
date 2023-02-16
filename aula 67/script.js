//Some todos os números (reduce)
//Retorne um array com os pares (Filter)
//Retorne um array com o dobro dos valores (Map)

const numeros = [41, 27, 2, 30, 13, 1, 5, 15, 20, 52];
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor
    return acumulador
}, 1) //1 é o valor inicial do acumulador (opcional), se não tiver valor inicial indicado, será o primeiro item do array
console.log(total, ' valor total dos numeros')
console.log('')


const totalPar = numeros.reduce((acumulador, valor) => { //soma apenas os números pares
    if (valor % 2 === 0) acumulador += valor
    return acumulador
}, 0) //coloquei o valor inicial com zero porque senão, ele usaria o numeros[0](41) desrespeitando a condição
console.log(totalPar, ' Valor total dos pares')
console.log('');


const pares = numeros.reduce((acumulador, valor) => { //retorna um array com números pares (melhor usar o filter nesse caso)
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, [])
console.log(pares, ' array com pares')
console.log('');



const dobro = numeros.reduce((acumulador, valor) => { //retorna um array com dobro de números (melhor usar o map nesse caso)
    acumulador.push(valor * 2)
    return acumulador;
}, [])
console.log(dobro, ' array com dobro do valor')
console.log('');


const pessoas = [
    {nome:'Luiz', idade: 15},
    {nome:'Maria', idade: 17},
    {nome:'Eduardo', idade: 35},
    {nome:'Letícia', idade: 20},
    {nome:'Cesar', idade: 60},
    {nome:'Rosana', idade: 31}
]

const maisVelha = pessoas.reduce(function(acumulador, valor){//retorna a pessoa mais velha
    if(acumulador.idade > valor.idade) return acumulador //o acumulador vai verificar até achar um número maior, quando ele achar o valor de acumulador será igual a esse e ele vai verificar até achar um maior
    return valor
})
console.log(maisVelha, ' Pessoa mais velha');

