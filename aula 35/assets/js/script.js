const elementos = [
    {tag: 'p', texto: 'Frase 1'}, //índice 0
    {tag: 'div', texto: 'Frase 2'}, //índice 1
    {tag: 'section', texto: 'Frase 3'}, // índice 2
    {tag: 'footer', texto: 'Frase 4'}, // índice 3
];

const container = document.querySelector('#container'); //selecionei a section
const novaDiv = document.createElement('div'); //criei uma nova div

for (let i = 0; i < elementos.length; i++){
   let {tag, texto} = elementos[i]; // a cada iteração, tag e texto se transformam em variáveis e recebem o valor do objeto no array de acordo com o índice
   let tagCriada = document.createElement(tag); // a cada iteração cria uma tagHTML com o valor da tag[i]
   tagCriada.innerText = texto; // O valor de texto é adicionado dentro da tagCriada, innerText pode ser usado quando não recebe tags
   novaDiv.appendChild(tagCriada);  //tagCriada fica dentro da div (novaDiv)
}

container.appendChild(novaDiv); // a div (novaDiv) vai pra dentro da section