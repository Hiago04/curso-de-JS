function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000) //new Date recebe tempo em milésimos contando a partir de 1/1/1970 ás 21H gmt +3 (era unix). A data passada como parâmetro será multiplicada por 1000 se transformando em segundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT' //A era unix tem um gmt de -3 (ou +3) esse timeZone corrige o gmt pra 0 tornando o horário de 21:00:00 para 00:00:00
    });
}

let relogio = document.querySelector('.relogio');
// let iniciar = document.querySelector('.iniciar');
// let pausar = document.querySelector('.pausar');
// let zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio(  ) {
        timer = setInterval(function() {
        segundos++; // a cada 1s segundos recebe 1
        relogio.innerText = criaHoraDosSegundos(segundos)
        }, 1000) //essa func conta de 1 em 1 segundo
}


document.addEventListener('click', function(e){
    let el = e.target // e.target = o elemento que está executando a ação determinada, nesse caso 'click'

    if(el.classList.contains('iniciar')) { //se o elemento clicado conter a classe 'iniciar' o código é executado, dessa forma se tiver vários elementos com essa mesma classe esse código funcionaria pra todos, diferente da outra forma que você pega de 1 em 1
        clearInterval(timer) // limpa o timer, porém o valor de segundos continua o mesmo
        segundos = 0; // reinicia os segundos
        iniciaRelogio() //inicia novamente
        relogio.classList.remove('pausado')
    }

    if(el.classList.contains('pausar')){
        clearInterval(timer); //limpa o timer(para a contagem), porém o valor de segundos continua o mesmo, dessa forma fica pausado
        relogio.classList.add('pausado')
    
    }

    if(el.classList.contains('zerar')){
        clearInterval(timer); //limpa o timer 
        relogio.innerText = '00:00:00';//relogio volta ao 0
        relogio.classList.remove('pausado')
    
    }
})

/* iniciar.addEventListener('click', function(e){
    clearInterval(timer)
    segundos = 0; 
    iniciaRelogio()
    relogio.classList.remove('pausado')
})


pausar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.classList.add('pausado')
})


zerar.addEventListener('click', function(e){
    clearInterval(timer);
    relogio.innerText = '00:00:00';
    relogio.classList.remove('pausado')
}) */