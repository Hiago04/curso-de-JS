//funcoes geradoras
//asterisco apos o function
//yield para cada valor
//atribua a uma const e chame utilizando .next()

function* geradora1() {
    yield 'Valor 1' //A cada vez que executado retorna o proximo yield 

    yield 'Valor 2'
    
    yield 'Valor 3'
}

const g1 = geradora1();
console.log(g1.next())//retorna um objeto, normalmente você pode acessar com .nomeDoObjeto
console.log(g1.next().value) //value é o valor
console.log(g1.next().done) //done é false enquanto existir yied
console.log(g1.next()) //done true, pois não existem mais yield

/* for (let valor of g1)
    console.log(valor) */ //retornaria o valor(value), o "for" consegue identificar o valor


//atribui uma variavel de inicio -> while com condição -> yield -> atualiza - executa

function* geradora2() {
    let i = 0;

    while(true){
        yield i;
        i++ //atualiza infinitamente
    }
}

const g2 = geradora2();
console.log('')
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)
console.log(g2.next().value)


console.log('');
//uma func com yield de 0 a 2 -> continue ela em outra func -> execute com for
function* geradora3() {
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4() {
    yield* geradora3()
    yield 3;
    yield 4;
}

const g3e4 = geradora4()
for (let i of g3e4){
    console.log(i)
}


console.log('');
//o return para a func normalmente

function* geradora5() {
    yield () => {
        console.log('vim do yield 1');
    }

    return () => {
        console.log('return: a função parou aqui');
    }

    yield () => {
        console.log('não apareço');
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
const func3 = g5.next().value;


func1()
func2()
try {
    func3()
} catch(e) {
    console.log('func3() não está disponível')
}