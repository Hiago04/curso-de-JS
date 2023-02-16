const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //índice 0
    {tag: 'div', texto: 'Frase 2'}, //índice 1
    {tag: 'section', texto: 'Frase 3'}, // índice 2
    {tag: 'footer', texto: 'Frase 4'}, // índice 3
];

const novaDiv = document.createElement('div');
const sectionMain = document.querySelector('#container')

for (let i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto;
    novaDiv.appendChild(tagCriada)
}

sectionMain.appendChild(novaDiv);