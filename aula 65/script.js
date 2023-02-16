//filter 
//crie uma func que verifica se o número for maior que 10 -> passe como ref pra um filter -> refatore a func

let numeros = [1, 50, 15, 19, 8, 40]

/* function callbackFilter(valor, indice, array) {// o nome poderia ser qualquer outro, o filter identifica o que é pela ordem
    if(valor > 10) {return true
    }else{
        return false
    }
}


 */

let maiorQue10 = numeros.filter((value) => value < 10) //não precisa das outras duas se não vai usar, não precisa de return nem de chaves quando não tem mais de um código a ser executado, não precisa de if, se a condição naturalmente retorna true
console.log(maiorQue10)

let filterTest = numeros.filter((valor, i, listaDeArray) => { //filter itera sobre o array
    console.log(valor, '-valor', i, '-indice', listaDeArray, '-array')})
console.log('###############');


const pessoas = [
    {nome:'Luiz', idade: 62},
    {nome:'Maria', idade: 62},
    {nome:'Eduardo', idade: 62},
    {nome:'Letícia', idade: 62},
    {nome:'Hiago', idade: 62}
]



let nomeMaiorQue5 = pessoas.filter((valor) => valor.nome.length > 5) //SÓ RETORNA ARRAY
let terminaComA = pessoas.filter((valor) => valor.nome[valor.nome.length - 1] === 'a')
console.log(nomeMaiorQue5);
console.log(terminaComA);