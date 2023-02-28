const fs = require('fs').promises;

module.exports= (caminho, dados) => {
    fs.writeFile(caminho, dados, { flag: 'w' })
};





function exemplo() {

    const path = require('path');
    const caminhoArquivo = path.resolve(__dirname, '..', 'teste.json');


    /* execute a func fora do escopo para funcionar, ou retire o código abaixo de dentro da func */

    fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'w' })
    //flag: 'w', essa flag apaga tudo que esta dentro do arquivo e escreve o que foi passado

    //se a flag for 'a' ele vai escrever sempre que você executar e não vai apagar a anterior

    // \n no fim do texto faz uma quebra de linha

    //passei o caminho da pasta e depois o que eu quero escrever nela

    //quando eu executo (clicando no play) a pasta é criada */
}