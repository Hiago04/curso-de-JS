let num1 = 9.51;
let array = [1, 2, 3, 4, 5] // array

 let num2 = Math.floor(num1) // arredona para o mais baixo
console.log(num2, ` --> arredonda ${num1} para o valor mais baixo`)

let num3 = Math.ceil(num1) // arredonda para o mais baixo
console.log(num3, ` --> arredonda ${num1} para o valor mais alto`)

let num4 = Math.round(num1) // arredonda para o mais próximo
console.log(num4, ` --> arredonda ${num1} para o valor mais próximo`)

console.log(Math.max(1, 3 ), ` -->  mostra o maior número de ${1, 2, 3}`)

console.log(Math.min(1, 2, 3), ` -->  mostra o menor número de ${1, 2, 3}`)

const aleatorio = Math.round(Math.random() * (10 - 5) + 10); //mostra número aleatório entre 5 e 10
console.log(aleatorio)