const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li') // cria um <li>
    return li
}



function limpaInput() {
    inputTarefa.value = '' //limpa o input
    inputTarefa.focus(); //quando a func for executada, o foco vai para o input (como se o user tivesse clicado no input)
}

function criaBotaoApagar(li) {
    li.innerText += ' '; //ADICIONA um espaço depois do li
    const botaoApagar = document.createElement('button'); //cria um botão
    botaoApagar.innerText = 'Apagar';
    li.appendChild(botaoApagar); //adiciona dentro do li
    botaoApagar.setAttribute('class', 'apagar'); //cria um atributo a tag html e depois da um nome a ele

}

function salvarTarefas() { //sempre que executado salva a lista de tarefas no local Storage
    const liTarefas = tarefas.querySelectorAll('li'); //adiciona os elementos li a essa const
    const listaDeTarefas = []; // cria um array vazio

    for (let tarefa of liTarefas) { // tarefa recebe o valor de li adicionado ao liTarefas
        let tarefaTexto = tarefa.innerText; //tarefaTexto recebe o valor do texto que está no tarefas(tarefas === li), quando você faz isso o texto do button vem junto 
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //Substitui 'Apagar' por ''(nada) // .trim() remove  espaço que ficou depois do texto
        listaDeTarefas.push(tarefaTexto); //agora formatado, o texto de tarefa é adicionado ao array 
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas); //transforma o array em uma string no formato JSON e adiciona a const tarefasJSON
    localStorage.setItem('tarefas', tarefasJSON) // salvei no localStorage do navegador, dentro da pasta 'tarefas'

}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas'); //pega o array que está no localStorage dentro da pasta tarefas
    const listaDeTarefas = JSON.parse(tarefas); //transforma a string em array novamente
    console.log(listaDeTarefas)

    for(let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput
    tarefas.appendChild(li) //adiciona o li ao tarefas (tarefas === <ul>)
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas()
}


inputTarefa.addEventListener('keypress', function (e) { //quando der enter adiciona a tarefa
    /* console.log(e) */ //pega o evento que está sendo executado, o e.target pega o ELEMENTO (html)
    //quando der console.log(e), vai nesse projeto no navegador, abre o console e dige qualquer tecla no input, lá vai ter uma lista com todas as informações dessa tecla inclusive o nome e o código
    if (e.keyCode == 13) {  // o código de enter é 13, eu poderia mudar para e.key === 'Enter', que daria na mesma (e.key é o nome da tecla)
        if (!inputTarefa.value) return; // se a caixa de input estiver vazia para a func
        criaTarefa(inputTarefa.value);
    }
})

document.addEventListener('click', function (e) { //executa a função de apagar ao clicar no botão apagar
    const el = e.target // e.target retorna o ELEMENTO clicado
    /*console.log(el.parentElement) // quando você clica em algum elemento do site, retorna o Pai dele, o elemento em que ele esteja dentro */
    if (el.classList.contains('apagar')) { // se o elemento
        el.parentElement.remove() // remove o elemento pai do button (no caso <li> )
    }
    salvarTarefas();
})

btnTarefa.addEventListener('click', function (e) { //quando clicar no botao 'adicionar tarefa' adiciona
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

addTarefasSalvas()