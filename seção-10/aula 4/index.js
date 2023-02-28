const fs = require('fs').promises;
const path = require('path')


async function readdir(rootDir) {
    try {
        rootDir = rootDir || path.resolve(__dirname)
        const files = await fs.readdir(rootDir); //files retorna um array com todas os arquivos da pasta do caminho informado
        walk(files, rootDir);
    } catch (e) {
        console.log(e);
    }
}

async function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file)//caminho e pasta 
        const stats = await fs.stat(fileFullPath)//mostra o status da pasta

        if(/\.git/g.test(fileFullPath)) continue; //se tiver um \.git ele volta para o for e continua a próxima iteração, não executa o console.log
        if(/node_modules/g.test(fileFullPath)) continue;

        if (stats.isDirectory()) {
            readdir(fileFullPath);
            continue; //se for um diretório(pasta) ele volta para o for e continua a próxima iteração, não executa o console.log, só não for um diretório
        }

        if(!/\.css$/g.test(fileFullPath) && !/\.css$/g.test(fileFullPath)) continue; // se não for css ou html ele não executa o log, continua a iteração

        console.log(fileFullPath);
    }
}

readdir(`c:\\Users\\Hiago\\Documents\\vscode notas\\para o github\\curso-js`)