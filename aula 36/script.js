//for in
// funciona com objetos
const frutas = ['Pêra 0', 'Maçã 1', 'Uva 2'];

/* for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
} */

for (let i in frutas) { // Acrescenta +1 a variável (a cada repetição) até chegar no último indice de frutas
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Hiago',
    sobrenome: 'Silva',
    idade: 17
}

console.log(pessoa.nome, 'é igual', pessoa['nome']);

for (let ix in pessoa) {
    console.log(`${ix}: ${pessoa.ix} que é igual ${pessoa[ix]}`) //com pessoa.ix não funciona
}