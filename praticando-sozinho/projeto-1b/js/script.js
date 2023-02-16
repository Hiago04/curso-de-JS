let cx = document.querySelector('#inp')
let botao = document.querySelector('#apaga');

function apagaUm() {
    let texto = cx.value
   cx.value = texto.slice(0, -1);
}

document.addEventListener('click', e => {
    let el = e.target
    if(el === botao){
        apagaUm()
    }
})

