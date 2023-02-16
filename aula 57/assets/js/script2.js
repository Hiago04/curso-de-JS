let botao = document.querySelector('.btn-num');
let input = document.querySelector('.display');


document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('btn-num')){
        input.value += el.innerHTML
    }
}.bind()); //o this usado na função abrange somente a func, com .bind() ele passa abranger o escopo de tudo que está dentro das chaves depois de return, igual no 'this.cliqueBotoes();'


