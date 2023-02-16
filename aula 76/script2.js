function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
    this.preco = this.preco + (this.preco * (quantia / 100))
};
Produto.prototype.desconto = function (quantia) {
    this.preco = this.preco - (this.preco * (quantia / 100))
};

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(10)
console.log(camiseta);