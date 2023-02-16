//herança com classes
class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(this.nome + ' já ligado');
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(this.nome + ' já desligado');
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.desligar();
d1.desligar();

class Smartphone extends DispositivoEletronico { //cria uma class 'Smartphone' e atribuí os mesmos valores a ela
    constructor(nome, cor, modelo) {
        super(nome) //como essa classe é uma classe filho, adicionando super você linka esse 'nome' com o 'nome' já existente na função pai, não fazer isso gera um erro

        this.cor = cor;
        this.modelo = modelo;
    }
}

const celular0 = new Smartphone('Samsung', 'Preto', 'S10')


class Tablet extends DispositivoEletronico {
    constructor(nome, wifi){
        super(nome);

        this.wifi = wifi;
    }

    ligar() {
        console.log('Tablet ligado'); //posso sobrescrever métodos
    }

    temWifi() { //também posso criar novos métodos
        if(wifi) console.log('tem wifi');
        if (!wifi) {
            console.log('Não tem wifi');
        }
    }
}


const tablet = new Tablet('IPad', true);