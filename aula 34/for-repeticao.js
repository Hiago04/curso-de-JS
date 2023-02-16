// estrutura de repetição for

for (let i = 0; i <= 5; i++){ 
    //console.log(`Linha ${i}`);
}

for (let i = 5; i >= 0; i--){
   // console.log(`Linha ${i}`)
}

for (let i = 0; i <= 10; i += 2){ // i += 2 mesma coisa que i = i + 2
    //console.log(`Linha ${i}`) //pulou de 2 em 2
}

for (let i = 0; i <= 10; i++){ 
    const par = (i % 2 === 0) ? 'par' : 'ímpar'; // Se o resto da divisão entre i e 2 der 0 é par
   // console.log(i, par)
}


const frutas = ['Maçã', 'Pêra', 'Uva'];
for (let i = 0; i < frutas.length; i++) {  //enquanto i for menor que frutas.length encrementa +1 a cada repetição
    console.log(`Índice ${i}`, frutas[i], frutas.length);
}

// O length pega o número de elementos, por isso tem que ser menor a frutas.length