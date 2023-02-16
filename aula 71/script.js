// Object.defineProperty - Object.defineProperties

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco
    this.estoque = estoque

    Object.defineProperty(this, 'estoque', { //cria UM objeto com mais configurações
        enumerable:true, // permite mostrar a chave
        value: estoque, // o valor da propriedade criada
        writable: true, // se o valor pode ser alterado ou não
        configurable:true // se o valor pode ser configurado/apagado
    });
}
const p1 = new Produto('Camisa', 20.00, 10);
console.log(p1);
console.log('');


function Produto1(nome, preco, estoque) {

    Object.defineProperties(this, { // cria VÁRIOS objetos, com configurações mais amplas 
        nome: {
        enumerable:true, // permite mostrar a chave
        value: nome, // o valor da propriedade criada
        writable: true, // se o valor pode ser alterado ou não
        configurable:true // se o valor pode ser configurado/apagado
    },
        preco: {
            enumerable:true, // permite mostrar a chave
            value: preco, // o valor da propriedade criada
            writable: true, // se o valor pode ser alterado ou não
            configurable:true // se o valor pode ser configurado/apagado    
        },
        estoque: {
            enumerable:true, // permite mostrar a chave
            value: estoque, // o valor da propriedade criada
            writable: true, // se o valor pode ser alterado ou não
            configurable:true // se o valor pode ser configurado/apagado    
        }

    });
}

const p2 = new Produto1('Calça', 50.00, 20);
console.log(p2);