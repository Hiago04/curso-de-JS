// closure

function retornaFuncao() {
    const nome = 'Lucas'
    return function(){ //essa funcao tem acesso ao seu próprio escopo, o escopo da retornaFuncao e o escopo global
        return nome;
    }
}

let funcao = retornaFuncao(); //retorna a func anonima
console.log(funcao)

//quando a funcao é executada ela fecha o escopo dela, a variável/parâmetro que fecha dentro dela se chama closure