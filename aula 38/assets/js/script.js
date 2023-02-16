let divParagrafo = document.querySelector('.conjuntoP');
let ps = document.querySelectorAll('p');
let estilosBody = getComputedStyle(document.body); //pega todos os estilos do body e adiciona a variável
let backgroundColorBody = estilosBody.backgroundImage; // depois do ponto vai aparecer uma lista com todos os estilos do body, o estilo que você selecionar terá o seu valor adicionado a variavel

for (let i of ps){
    i.style.backgroundImage = backgroundColorBody;
    i.style.color = 'white';
}