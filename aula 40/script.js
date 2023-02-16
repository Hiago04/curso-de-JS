// break continue
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/* for (let i of numeros) {
    
    if (i === 2) {
        console.log('pulei o número 2');
        continue; // pula o número que está na condição if
    }

    console.log(i); // continua executando normalmente

    if (i === 7){
        console.log('7 encontrado, código parado');
        break; // para o código assim que for true
    }
} */

 console.log('#### while e do while ####')

 let ix = 0;

while (ix < numeros.length) {
    let numero = numeros[ix];

    if(numero === 2) {
        console.log('pulei o 2');
        ix++
        continue;
    }

    if(numero === 7) {
        console.log('7 encontrado, código parado');
        ix++
        break;
    }
    console.log(numero);
    ix++
} //funciona com o do while