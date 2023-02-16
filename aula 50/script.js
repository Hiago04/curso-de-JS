//parâmetros da função

function funcao0(){
    console.log('oi');
}
funcao0('se eu insiro um valor nada acontece', 1, 2, 3)

// O valor inserido pode ser capturado com arguments (não funciona no arrow function)
function funcao1() {
    console.log('os argumentos estão listados abaixo')
    console.log(arguments)
}
funcao1('argumento 0', 'argumento 1', 'argumento 2');

// quando nenhum falor adicionado retorna undefined

function funcao2(n1, n2) {
    console.log(n1, n2)
}
funcao2(1)

// é possível dar um valor padrão caso nenhum for adicionado
function funcao3(n1, n2, n3 = 0) {
    console.log(n1 + n2 + n3)
}
funcao3 (1, 2)

//atribuição via desestruturação objeto
function funcao5({nome, sexo, idade}) {
    console.log(nome, sexo, idade)
}
let objeto = {
    nome: 'Luiz',
    sexo: 'Masculino',
    idade: '25'
}
funcao5(objeto)
funcao5({nome: 'Ricardo', sexo: 'Masculino', idade: 39});

//atribuição via desestruturação array
function funcao6([nome, sexo, idade]) {
    console.log( nome, sexo, idade);
}
funcao6(['Felipe', 'Masculino', 17])

// rest operator 
function funcao7(operador, acumulador, ...numeros) {//...numeros, cria um array com o resto dos números que você colocar depois do acumulador
    for (let n of numeros) {
        if(operador === '+') acumulador += n
        if(operador === '-') acumulador -= n
        if(operador === '*') acumulador *= n
        if(operador === '/') acumulador /= n
    }
    console.log(acumulador, numeros);
    
}
funcao7('-', 0, 1, 2, 3);

