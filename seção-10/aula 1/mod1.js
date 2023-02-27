const nome = 'Luiz';
const sobrenome = 'Miranda';

const falaNome = () => nome + ' ' + sobrenome;

//formas de exportar

//primeira forma, module.exports é uma chave vazia
/*console.log(module.exports);
 module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
 */

//segunda forma
/* exports.NOME  = nome; //NOME é exportado  o valor de nome
exports.sobrenome = sobrenome;
 */

//terceira forma
/* this.digaNome = falaNome;
console.log(exports); */

class Pessoa {
    constructor(nome) {
        this.nome = nome; 
    }
}

module.exports = {
    digaNome: falaNome, Pessoa, NOME: nome, sobrenome
}