class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //método de instância
    aumentar() {
        this.volume += 2
    }

    diminuir() {
        this.volume -= 2
    }

    //método estático: diferente dos outros métodos a cima ele só pode ser acessado diretamente com a classe, e não tem acesso ao constructor ou a outros métodos de instância
    static trocaPilha() {
        console.log('ok, vou trocar');
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentar()
controle1.aumentar()
// controle1.trocaPilha() //retorna um erro
console.log(controle1);

ControleRemoto.trocaPilha();