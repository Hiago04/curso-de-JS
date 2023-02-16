// Getter(get) - Setter(set)

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', { //cria UM objeto com mais configurações
        enumerable:true, // permite mostrar a chave
        configurable: true, // o valor da propriedade criada
        get: function() { //ele é chamado como uma chave, não como uma func. Geralmente só serve pra retornar o valor
            return estoque
        },
        set: function(valor) { //altera o valor, verifica o valor, permite que o valor seja alterado
            if(typeof valor !== 'number') {throw new TypeError('Não é um número')

            }
            estoque = valor
        }
    });
}

const p1 = new Produto('Camisa', 20.00, 10);
console.log(p1, p1.estoque);
console.log('');

p1.estoque = 0;
console.log(p1.estoque);
console.log('');


function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor){
        if(typeof valor !== 'string'){
            throw new TypeError ('Não é uma frase')
            }
        }
    }
    
}

const p2 = criaProduto('Vanderley');
console.log(p2.nome)
p2.nome = 5;
console.log(p2.nome)

