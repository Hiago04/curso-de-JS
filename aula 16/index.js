let alunos = ['thiago', 'pedro', 'ana', 'bruna', 'marcelo']; // criei um array
console.log(`primeiro aluno: ${alunos[0]}  último aluno: ${alunos[alunos.length-1]}`)


alunos.push('leandro') // adicionei no fim do array
alunos.unshift('letícia') // adicionei no começo
console.log(`primeiro aluno: ${alunos[0]} último aluno: ${alunos[alunos.length-1]}`)

alunos.pop() //remove último item do array
alunos.shift() // remove primeiro item do array
console.log(alunos)

alunos[2] = 'joão'; // altera o item do array de acordo com o indice indicado
console.log(alunos[2])

console.log(alunos.slice(0,3)) //Mostra os 3 primeiros
console.log(alunos instanceof array) //diz se é array ou não 


