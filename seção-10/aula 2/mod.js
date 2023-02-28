module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir(){
        console.log(`${this.nome} está latindo`);
    }
}//semelhante ao default (import/export)
//No lugar de class você poderia criar uma variável, funcao anonima, Objeto etc.  
