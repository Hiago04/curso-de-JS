//Métodos adicionais para objetos

//COPIAR e adicionar objetos
let produto = {nome: 'Caneca', estoque: 20, preco: 10}
let outroProduto = {
    ...produto,
    validade: '10/26'
}
outroProduto.nome = 'amêndoas'
outroProduto.estoque = 125
let maisUmProduto = Object.assign({}, produto, {material: 'argila'})

console.log(produto, ' +produto original')
console.log(outroProduto, ' +não alterou o produto')
console.log(maisUmProduto, ' +não alterou o produto')
console.log('');

console.log(Object.keys(produto)); //retorna a chave do produto
console.log('');


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));// retorna uma descrição detalhada das conf, da chave de um objeto
console.log('');


console.log(Object.values(produto));//retorna os valores
console.log('');

for(let valor of Object.entries(produto)) { //retorna a chave e o valor de 2 em 2
    console.log(valor[0], valor[1])
}