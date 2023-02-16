//class
//class = funcao construtora
class Pessoa1 {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(this.nome, ' está falando');
    }//o metodo já vai para o prototype, diferente de quando você cria da outra forma(function Pessoa...) ou com facotory function
    
    comer() {
        console.log(this.nome, ' está comendo');
    }

}

const pessoa1 = new Pessoa1 ('Luiz', 'Miranda')
console.log(pessoa1);
pessoa1.falar()


//func constructor normal
function Pessoa2(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa2.prototype.falar = function(){
    console.log(this.nome, ' esta falando');
}
const pessoa2 = new Pessoa2('Maria', 'Eduarda')

pessoa2.falar()