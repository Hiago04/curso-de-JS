//func splice, faz a mesma coisa que o pop, push, shift, unshift

//                -5       -4       -3      -2        -1 indices negativos: A QUANTIDADE de itens menos o seu indice
//                0       1         2       3          4
const nomes = ['João', 'Lucas', 'Maria', 'Vanessa', 'Otávio']

//.splice(indice, delete, elem1, elem2, elem3...)

//shift
nomes.splice(0, 1) //delete um elemento do indice zero
console.log(nomes,  ' +shift')

//unshift
nomes.splice(0, 0, 'Amanda') //adicionou amanda no indice 0 
console.log(nomes,  ' +unshift')

//push
nomes.splice(nomes.length, 0, 'Thiago') //adicionou Thiago no final, numeros.length = quantidade de itens
console.log(nomes,  ' +push')

//pop
nomes.splice(-1, 1)
console.log(nomes,  ' +pop') //removeu o último índice
