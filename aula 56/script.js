//Factory function (funções de fábrica)
//this

function criaPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,

        //getter
        get nomeCompleto() { //com get você pode chamar sem os parênteses
            return `${this.nome} ${this.sobrenome}` //o this aponta pra propriedade do objeto, sem o this ele apontaria diretamente para o parâmetro
        },

        //Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ') //transforma em array, separando em itens a cada espaço
            this.nome = valor.shift() //remove o primeiro e adiciona a propriedade valor
            this.sobrenome = valor.join(' ')  //junta o array transformando em uma string, separando cada item com espaço
            console.log(valor)
        },

        fala: function(assunto = 'falando NADA') {
            return `${nome}, seu imc é ${this.imc()} está ${assunto}`;
        },

        peso,
        altura,

        imc() { //é igual a imc: function(){}...
            const indice = peso / (altura ** 2)
            return indice.toFixed(2)
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.85, 93);
const p2 = criaPessoa('Maria', 'Eduarda', 1.50, 45);
console.log(p2.fala()) // sem o "this." antes do "imc()" retornaria um erro. Isso porque fala() retorna apenas o que existe dentro de fala. Já this. guarda todo o escopo do valor de p2(o valor de p2 é uma func). Ou seja this.imc() == p2.imc()
p1.nomeCompleto ='Maria Oliveira Silva'

console.log(p1.nomeCompleto)// com get ele pode ser chamado como um atributo