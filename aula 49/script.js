// Declaração de função (Function hoisting)

falaOi();
function falaOi() {
    console.log('Oi');
} // O hoisting permite que você executa uma func antes de declarar, como se o JS lêsse de cima pra baixo e de baixo pra cima

// First-class objects (quando funções são tratadas como um dado)
// Function expression --> jogar uma func em uma variável

const souUmDado = function(){ // o nome da função vai ser o nome da constante
    console.log('Sou um dado.');
}


console.log('#############');

function executaFunc (func) { // uma função que executa outra função
    console.log('Estou excutando uma função')
    func();
}
executaFunc(souUmDado);

console.log('#############');

//Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()

console.log('#############');

// dentro de um objeto 
const objeto1 = {
    falar() {
        console.log('estou falando')
    }
}
objeto1.falar();

const objeto2 = {
    falar: function() {
        console.log('estou falando novamente')
    }
}