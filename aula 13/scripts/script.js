texto = 'Um texto';

console.log(texto[3]); //mostra a letra respectiva ao index
console.log(`${texto} adicionando texto`) // une as duas coisas
console.log(texto.indexOf('o', 4)) // proucura o index da letra 'o' a partir do index  4
console.log(texto.match([/a-z/g])) // retorna todas as letras minúsculas da variável texto
console.log(texto.replace(/t/g, p)) // substituí a letra t pela g
console.log(text.split(' ')) // divide as palavras 
console.log(texto.slice-3) // retorna as 3 últimas palavras
