const { Pessoa } = require('./mod1');
//const axios = require('axios');// arquivos node_modules não precisam 

const p1 = new Pessoa('Luiz')
console.log(p1);

let idade = 35;

module.exports = {
    idade, Pessoa
}

