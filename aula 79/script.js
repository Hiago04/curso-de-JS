const falar = {
    falar() {
        console.log(`${this.nome} está falando`);
    }
}

const comer = {
    comer() {
        console.log(this.nome, ' está bebendo');
    }
}

const prototypePessoa = {...falar, ...comer};// que seria o mesmo que
// const prototypePessoa = Object.assign({}, falar, comer);


function criaPessoa(nome, sobrenome) {
    return Object.create(prototypePessoa, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    })
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.')
p1.falar()