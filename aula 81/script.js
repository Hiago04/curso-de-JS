//getter e setters
let _velocidade = Symbol('velocidade') //um symbol impede que a variável seja acessada, porque Symbol() sempre que chamado gera um valor único, ou seja symbol() !== symbol()
class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0 //dessa forma fica impossível que alguém acesse essa propriedade por fora
    }

    set velocidade(valor) { //setter é executado quando você tenta mudar a velocidade(o nome do setter)
        console.log('SETTER');
        if(typeof valor !== 'number') return;
        if(valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade() { //getter é executado quando você chamar a velocidade (nome da func getter)
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if(this[_velocidade] >= 100) return
        this[_velocidade]++
    }

    freiar() {
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')

c1.velocidade = 50
console.log(c1.velocidade);