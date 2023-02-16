//for of
// não funciona com objetos
const nome = 'Hiago Silva';
const pessoas = ['Hiago',  'João', 'Pedro']

for (let ix in pessoas){ //retorna o índice
    console.log(`${ix} retorna o índice a cada iteração`);
}

console.log('###');


for (let i of pessoas){ //retorna o valor de cada índice e não o índice
    console.log(`${i} retorna o valor a cada iteração`)
}