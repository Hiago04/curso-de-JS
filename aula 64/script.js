//concatenando arrays com ...spread e .concat
//crie dois arrays e atribua a concatenação a um novo array

let a1 = [1, 2, 3]
let a2 = [4, 5, 6]

let a3 = a1.concat(a2, [7, 8, 9], 'Otávio')
console.log(a3);

let a4 = [...a1, ...a2, ...[7, 8, 9], 'Miranda'] //sem os ... ele retornaria o array
console.log(a4);
