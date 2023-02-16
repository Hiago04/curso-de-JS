//Polimorfismo, quando uma função se comporta de uma maneira diferente, mesmo sendo filho de uma certa função
//Superclass - classe = cosntructor func
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if (valor > this.saldo) {
       console.log(`Saldo insuficiente: ${this.verSaldo()}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo}`);
};

const conta1 = new Conta(11, 22, 10)
conta1.depositar(11);
conta1.depositar(10);

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if (valor > (this.saldo + this.limite)) {
       console.log('Saldo insuficiente: ', this.verSaldo());
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
}

let contaCorrente1 = new CC(11, 22, 0, 100)
contaCorrente1.sacar(101)