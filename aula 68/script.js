//retorne a soma do dobro de todos os pares
// filtrar pares (filter)
// dobrar os pares (map)
// somar tudo (reduce)

const numeros = [41, 27, 2, 30, 13, 1, 5, 15, 20, 52];

const final = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) =>{
    acumulador += valor
    return acumulador
},0)


console.log(final)