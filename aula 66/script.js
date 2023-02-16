//Map: Altera o valor do array

// Retorne uma string com o nome da pessoa
// Remova apenas a chave 'nome' do objeto
// Adicione uma chave id em cada Objeto

const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 17},
    {nome:'Eduardo', idade: 35},
    {nome:'Letícia', idade: 20},
    {nome:'Cesar', idade: 15},
    {nome:'Rosana', idade: 31}
]

const nomes = pessoas.map(valor => valor.nome)
console.log(nomes);
console.log('####################');



const idades = pessoas.map((valor) => {
    let newObj = {...valor} //se eu tivesse deletado direto do valor tinha alterado o valor original
   delete newObj.nome
   return newObj
})
console.log(idades);
console.log('####################');



const idade = pessoas.map((valor) => ({idade: valor.idade}))
console.log(idade);
console.log('####################');



const iD = pessoas.map(function(valor, i){
    let newObj = {...valor};
    let indice = `${i}${newObj.nome.length}01`
    indice = Number(indice)
    newObj.id = indice
    return newObj
})
console.log(iD);
console.log('####################');
console.log(pessoas);