
const nomes = ['Eduardo', 'João', 'Maria']

const novo = [...nomes] //dessa forma o valor de nomes é copiado, se não fosse assim eles estariam ligados
console.log(novo, ' +copiado de nomes');

delete novo[0] //deixa o indice 0 vazio sem modificar os indices
console.log(novo, ' +primeiro indice deletado')
novo[0] = 'Leonardo' //Atribuí valor ao indice que estava vazio 
console.log(novo, ' +primeiro indice atribuído')

const removido = novo.pop()//remove o último e adiciona a uma variável
console.log(novo, removido, ' +pop()');

novo.push('Sara', 'Arthur'); //adiciona um novo elemento no final
console.log(novo, ' +push()')

const removido2 = novo.shift()//remove o primeiro indice e atribui ao removido2. Ele altera os indices
console.log(novo, ' - ', removido2, ' +shift()');

novo.unshift('Jéssica') //adiciona um no começo
console.log(novo, ' +unshift')

console.log(nomes.length, ' +length do array nomes')//.length mostra a quantidade de itens e nao de indices

const slice1 = novo.slice(1, 3) //retorna o indice 1 ao  indice antes do indice 3
console.log(slice1, ' +slice(1, 3)');

const slice2 = novo.slice(0, -1) //retorna o indice 0 ao  indice antes do último, excluindo o último
console.log(slice1, ' +slice(0, -1)');


console.log('')
let lista = ['banana', 'maçã', 'pêra', 'goiaba', 'abacate'];
console.log(lista, ' array lista')

lista = lista.join(' ') //junta todos os elementos do array(transforma em string), separando com a condição entre parênteses
console.log(lista, ' +join')

lista = lista.split(' ') //separa todos os elementos da string, e a condição entre parênteses serve pra informar os intervalos
console.log(lista, ' +split')

