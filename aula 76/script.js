// Produto -> aumento e desconto
//Camiseta = cor, caneca = material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco = this.preco + (this.preco * (quantia / 100))
};

Produto.prototype.desconto = function(quantia){
    this.preco = this.preco - (this.preco * (quantia / 100))
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor; //criei uma chave chamada cor
}

Camiseta.prototype = Object.create(Produto.prototype);//alterei o prototype da camiseta pro do Produto(junto com os métodos criados dentro dele) 
const camiseta = new Camiseta('Regata', 10, 'Preta');
camiseta.aumento(10); //usei um método do Produto.prototype
console.log(camiseta); //O constructor (antes das chaves) se chama Produto
Camiseta.prototype.constructor = Camiseta; //Agora o constructor se chama Camiseta
console.log('');


function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material;
    
    Object.defineProperty(this , 'estoque',{
        configurable: false,
        enumerable: true,
        get: function() {
            return estoque;
        },
        set: function(valor) {
            if(typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;
const caneca = new Caneca('Bardolan', 30, 'Argila', 102)
console.log(caneca);
console.log(caneca.estoque);
caneca.desconto(100)
console.log(caneca.preco);

console.log('');
caneca.estoque = '20'
console.log(caneca.estoque);