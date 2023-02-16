const pessoa1 = {
    nome: 'João',
    sobrenome: 'Guilherme',
    idade: 20
};
console.log(pessoa1.nome);

function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade} // Abreviação de return{nome: nome, sobrenome:sobrenome, idade:idade}
}

let pessoa2 = criarPessoa('Lucas', 'Filho', 25); // criei uma variável usando a função criarPessoa 
console.log(pessoa2.nome, pessoa2.sobrenome, 'tem', pessoa2.idade, 'de idade')

const pessoa3 = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 28, // vírgula sempre que for adc um novo elemento

    fala() {
        console.log(`${this.nome + ' ' + this.sobrenome} tem ${this.idade} de idade`) //this.nome = O elemento nome que está dentro desse objeto

    }, // vírgula sempre que for adc um novo elemento

    incremento() {
        this.idade++;
    }
};

pessoa3.fala()
pessoa3.incremento()
pessoa3.fala()