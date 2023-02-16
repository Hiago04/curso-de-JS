// return
// Retorna um valor
// Termina a função

function func0(nome, sobrenome) {
    return { nome, sobrenome } // mesma coisa que {nome: nome, sobrenome: sobrenome} 
}

let p1 = func0('Luiz', 'Paulo');
let p2 = {
    nome: 'João',
    sobrenome: 'Pedro'
}
console.log(p1, p2); //são a mesma coisa


function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto
    }
    return falaResto; // a func falaFrase retorna a func falaResto
}
const fala = falaFrase('Olá');  //fala recebe a func falaResto, com o parâmetro 'Olá'
const frase = fala('Mundo');
console.log(fala, frase) //fala se torna uma func

// mais um exemplo
function func1(multiplicador) {
    function childFunc1(n) {
        return multiplicador * n
    };
    return childFunc1;
} // essa func é igual a func abaixo

/* function func1(multiplicador) {
    return function (n){
        return multiplicador * n
    }
};  */


const duplica = func1(2);
const triplica = func1(3);
const quadruplica = func1(4);

console.log( //todos viraram func com parâmetros pré-definidos
    duplica(10),
    triplica(10),
    quadruplica(10)
)
