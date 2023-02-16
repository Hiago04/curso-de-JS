//prototipos

function Pessoa0(nome, sobrenome) {
this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => {this.nome + ' ' + this.sobrenome}
}

const pessoa0 = new Pessoa0('Luiz', 'O.');
const data = new Date();

console.dir(pessoa0)
console.dir(data) //se você olhar o dentro do data, não tem nada, mas dá pra usar métodos como getFullYear etc. Isso porque eles ficam dentro do prototype do data (__proto__)
console.log('');

console.log(Pessoa0.prototype)//assim que você cria uma função construtora, ela recebe automaticamente o objeto prototype
console.log(pessoa0.__proto__)//e quando você atribuí ela a uma variável, ela é linkada para dentro da variável, com o nome __proto__
console.log(Pessoa0.prototype === pessoa0.__proto__)
console.log('');

//todo objeto tem seu proto? Sim
//Você pode passar os métodos de uma func para o proto

function Pessoa1(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

}

Pessoa1.prototype.nomeCompleto = function(){
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa1('Maria', 'E.');
console.log(pessoa1.nomeCompleto(),' +prototype');

//quando você executa um método de um objeto primeiro ele procura no próprio objeto, depois no seu proto, depois no prototype geral
//pessoa1 --> Pessoa.prototype --> Object.prototype
