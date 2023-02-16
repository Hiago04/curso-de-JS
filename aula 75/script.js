// new Object ->, o objeto vem linkado ao prototype

const objA = {
    chaveA: 'A'
    //__proto__: Object.prototype
}

const objB = {
    chaveB: 'B'
    //__proto__: Object.prototype
}

const objC = new Object();
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA) //muda o __proto__ de B linkando com o A, agora possoa acessar A de B
Object.setPrototypeOf(objC, objB) //muda o __proto__ de C linkando com o B, agora possoa acessar A e B de C
console.log(objC.chaveA)
console.log('');


console.log(Object.getPrototypeOf(objB))//mostra o proto do objB
console.log('');


function Produto(nome, preco ) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const produto1 = new Produto('Camiseta', 10)
console.log(`${produto1.preco} sem desconto`)

produto1.desconto(50)
console.log(`${produto1.preco} com desconto`)
console.log('');


const p2 = new Object();
p2.nome = 'Caneca'
p2.preco = 10
console.log(p2.preco, ' sem aumento');

Object.setPrototypeOf(p2, Produto.prototype)
p2.aumento(50)
console.log(p2.preco, ' com aumento');
console.log('');


const p3 = Object.create(Produto.prototype) //por padrão no lugar de Produto.prototype é Object.prototype
p3.nome = 'Faca'
p3.preco = 35
console.log(p3);

p3.aumento(100)
console.log(p3.preco, ' com aumento');
console.log('');


const p4 = Object.create(Produto.prototype, {
    nome:{
    wiritable: true,
    configurable: true,
    enumerable: true,
    value: 'Espelho redondo'
    },
    preco: {
        writable: true,
        configurable:true,
        enumerable: true,
        value: 70
    }
})

console.log(p4.preco, ' sem desconto');
p4.desconto(10)
console.log(p4.preco, ' com desconto');