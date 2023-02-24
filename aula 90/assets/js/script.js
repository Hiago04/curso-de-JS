document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    const response = await fetch(href); //fetch é o responsável por buscar os dados dentro de href
    console.log(response);
    
    if(response.status !== 200) throw new Error('ERRO 404!')
    
    const html = await response.text();
    carregaResultado(html);

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}


