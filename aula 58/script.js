//funções construtoras
//você pode começar func construtoras com letras maiúsculas, e usar o new pra atribuir a uma variável

function Pessoa (nome, sobrenome){
    //posso criar atributos ou métodos privados
    const ID = 123456
    const metodoInterno = () => {
        return 'Ná tem NADA'
    }

    //metodos púlicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function() {
        console.log(`${this.nome} ${this.sobrenome}: fala oi`);
    };
}

const p1 = new Pessoa('João', 'Leite')
const p2 = new Pessoa('Maria', 'Eduarda')

console.log(p2.metodo());