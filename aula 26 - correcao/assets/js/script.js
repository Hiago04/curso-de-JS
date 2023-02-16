//Capturar o evento de submit do formulario
const form = document.querySelector('#formulario');

/* // --> FORMA QUE EU FIZ <--
function capturaEvento (e) {
    e.preventDefault();
    console.log('oi');
}
form.addEventListener('submit', capturaEvento);  */

// --> FORMA DO VÍDEO <--


form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Evento Previnido');

    const inputPeso = e.target.querySelector('#ipas'); // e.target é igual ao form isso porque ele captura o elemento que esta executando o evento dentro de addEventListener ('submit')
    const inputAltura = e.target.querySelector('#itext');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value); // .value == valor dê

    if (!peso) { // undefinied sempre vai ser um valor falso, por isso !peso assim quando foi false ele retorna true e para o código, retornando 'Peso inválido'
        setResultado('Peso Inválido', false); // esse false vai servir pra adicionar uma class ao p, seguindo a func. na linha 64 e aparecendo na linha 71
        return;
    }

    if (!altura) { // Lembrando que enquanto o valor entre parênteses for false ele continua, mas se for true ele executa a linha de baixo
        setResultado('Altura Inválida', false);
        return; // Para a func
    }

    const imc = getImc(peso, altura); // A func faz o calculo do imc com os parâmetros que você colocou, e atribuí o valor a const imc
    const nivelImc = getNivelImc(imc); // Verifica qual o nível de peso de acordo com o valor numérico da const imc

    const msgImc = `Seu imc é ${imc} (${nivelImc})`; 

    setResultado(msgImc, true); // Atribuí tudo a func final
});

function getNivelImc (n) { // Verifica o nível de peso baseado no valor imc
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade de grau 1', 'Obesidade de grau 2', 'Obesidade de grau 3'];

    if (n >= 39.9) return nivel[5]; //Quando o if for curtinho não precisa de chaves
    if (n >= 34.9) return nivel[4]; // O motivo de não ter else if's é porque  ele vai verificar até achar um valor true
    if (n >= 29.9) return nivel[3];
    if (n >= 24.9) return nivel[2];
    if (n >= 18.5) return nivel[1];
    if (n < 18.5) return nivel[0];

}

function getImc (peso, altura) { //Calcula o imc
    const imc = peso / altura ** 2;
    return imc.toFixed(2); // deixa só com duas casas depois da vírgula
}

function criaP () {
    const p = document.createElement('p');  // criei um elemento HTML <p> e adicionei ela em uma constante
    return p;
}

function setResultado(msg, isValid) {
    const resultado = document.querySelector('#div-result')
    resultado.innerHTML = '';
    const p = criaP(); // o valor da função p (que era um parágrafo) foi adicionada a esta constante
    p.innerHTML = msg;
    resultado.appendChild(p); //coloquei o p dentro da div-result
    
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    }  else {
        p.classList.add('bad')
    }
}

