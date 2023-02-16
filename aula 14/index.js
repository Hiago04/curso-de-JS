let num1 = 2.552; //number
let num2 = 2.5; //number
let num3 = 0.7 // number
let num4 = 0.1 // number


console.log(num1.toString(), ' --> toString()') // transforma em string

console.log(num1.toString(2), ' --> toString(2)') // transforma em binário

console.log(num1.toFixed(2), ' --> toFixed') // Limita as casas decimais para dois

console.log(Number.isInteger(num1),  ` --> Number.isInteger(${num1})`); // Verifica se é inteiro (true) ou não (false)

let temp = 1 * 'a'; // não da pra multiplicar number com string (vai retornar NaN)
console.log(Number.isNaN (temp), ` --> Number.NaN(${temp})`); //Verifica se é NaN(Not a number) (true) ou não (false)


num3 += num4; // vai dar 0.799999 mas deveria ser 0.8
num3 += num4; // vai dar 0.899999 mas deveria ser 0.9
num3 += num4; // vai dar 0.999999 mas deveria ser 1
num3 = Number(num3.toFixed(2)) // isso conserta, transforma em 0.8

console.log(Number.isInteger(num3), ` --> valor de num3: ${num3}`);
