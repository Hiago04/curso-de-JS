//Callback
//Quando você cria um script uma função pode levar um tempo diferente da outra para ser executada
//um exemplo disso abaixo

function rand(min = 1000, max = 3000) { //1000 miliseconds = 1 second
    const num = Math.random() * (max - min) + min;
    return Math.floor(num)
} //gera um número de 1000 a 3000

function f1(callback) {
    setTimeout(function(){
        console.log('f1')
        if (callback) callback() //só vai ser executada se for passado como parâmetro
    }, rand()) //as funções são executadas aleatoriamente
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2')
        if (callback) callback()
    }, rand()) //as funções são executadas aleatoriamente
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3')
        if (callback) callback()
    }, rand()) //as funções são executadas aleatoriamente
}

/* Abaixo uma forma de fazer elas executarem em ordem */


f1(f1Callback); //executa a func abaixo

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá Mundo')
}
