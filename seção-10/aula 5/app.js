const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/write');
const ler = require('./modules/read');


// const pessoas = [
//     { nome: 'João' },
//     { nome: 'Maria' },
//     { nome: 'Eduardo' }
// ]
// const json = JSON.stringify(pessoas, '', 2) //transforma em json
//escreve(caminhoArquivo, json)


async function leArquivo(caminho) {
   const dados = await ler(caminho);
   console.log(dados); //os dados estão em formato json
   console.log();
   //renderizaDados(dados);
}


function renderizaDados(dados) {
    dados = JSON.parse(dados) //peguei os dados do json e transformei em um array

    dados.forEach(val => console.log(val.nome)) //iterei sobre os dados
}

leArquivo(caminhoArquivo)