function mostraHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR' , {
        hour12: false
    }); //mostra a hora atual hora:minutos:segundos
}

/* function funcDoInterval() {
    console.log(mostraHora()) // não entendi porque tem que ser uma dentro da outra, mas se não for assim não funciona
}
setInterval(funcDoInterval, 1000); //func é passada por referência (sem os parênteses), isso acontece quando você quer que ela seja executada posteriormente, com os parênteses ela é executada no exato momento */

const timer = setInterval(function(){ //func anônima, funciona igual a de cima
    console.log(mostraHora());
}, 1000); // por milisegundo, 1000 milisegundo = 1 segundo quando for executado vai repetir de 1 em 1 segundo

setTimeout (function(){
    clearInterval(timer);
}, 3000); // executa segundo por segundo até chegar no 3° segundo (para antes do terceiro)


/* setTimeout (function(){
    console.log('Olá Mundo');
}, 5000); //executa assim que der 5 segundos */