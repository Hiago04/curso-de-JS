/* Escreva que uma função que recebe um número e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e por cima retorne o próximo número
Use um for do 0 ao 50 */

function fizzBuzz (n){
    if (typeof n !== 'number') return 'Não é um número';
    if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz'; //coloquei em primeiro porque se não, daria errado
    if (n % 3 === 0) return 'Fizz';
    if (n % 5 === 0) return 'Buzz';
    return n;

}

for (let i = 0; i <= 50; i++){
    console.log(i, fizzBuzz(i))
}