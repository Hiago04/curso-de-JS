// escopo léxico

const nome = 'Luiz';
function falaNome() {
    const nome = 'João' // se esse João não existisse ele saíria da func e procuraria no escopo global, e nome seria = 'Luiz'
    console.log(nome)
}

falaNome()