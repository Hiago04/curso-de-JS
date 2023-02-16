let altura = document.querySelector('#itext');
let peso = document.querySelector('#ipas');
let resultado = document.querySelector('#imc');
let formulario = document.querySelector('#formi');
let indice;



function recebeEvento (evento) {
        evento.preventDefault()
        console.log('teste pra ver se ta funfando')
    }
    formulario.addEventListener ('submit', recebeEvento);


function tabelaIMC (){
    indice = peso.value / (altura.value**2);

    if (indice <= 18.5 && indice > 0){
        resultado.innerHTML = 'Abaixo do peso';
    } else if (indice >= 18.6 && indice <= 24.9){
        resultado.innerHTML = 'Peso Normal';
    } else if (indice >= 25 && indice <= 29.9){
        resultado.innerHTML = 'Sobrepeso';
    } else if (indice >= 30 && indice <= 34.9){
        resultado.innerHTML = 'Obesidade de grau I';
    } else if (indice >= 35 && indice <= 39.9){
        resultado.innerHTML = 'Obesidade de grau II';
    } else if (indice >= 40 && indice < 100){
        resultado.innerHTML = 'Obesidade de grau III';
    } 
}