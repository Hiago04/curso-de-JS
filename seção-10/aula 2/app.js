const criaCachorro = require('./mod.js')

const dog1 = new criaCachorro('spike')
dog1.latir()


const path = require('path')
console.log(path.resolve(__dirname, '..', '..', 'curso-js', 'aula 1')); //dois pontos volta, nome da pasta avança
console.log(__dirname); //mostra o caminho até chegar na pasta
console.log(__filename); //mostra o caminho até chegar no arquivo