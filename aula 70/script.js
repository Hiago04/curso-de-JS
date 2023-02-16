// Revisão objeto
// Uma forma literal de criar algo é a forma normal de criar

const pessoa = { //objeto literal
    nome: 'Luiz', //cada propriedade se chama chave, nome é uma chave
    sobrenome: 'Otávio'
}
console.log(pessoa.nome, pessoa.sobrenome, ' +pessoa.')
console.log(pessoa['nome'], pessoa['sobrenome'], " +pessoa['']")
console.log('')


const pessoa1 = new Object();
pessoa1.nome = 'Maria'
pessoa1.sobrenome = 'Eduarda'

console.log(pessoa1.nome, pessoa1.sobrenome, ' +pessoa1.')
console.log(pessoa1['nome'], pessoa1['sobrenome'], " +pessoa1['']")
console.log('')


//deletar chaves
delete pessoa1.sobrenome
console.log(pessoa1, ' +sobrenome deletado')
console.log('')


//adicionar chaves
pessoa1.sobrenome = 'Laura';
console.log(pessoa1, ' +sobrenome adicionado')
console.log('')


//adicionar um método (funcao)
pessoa1.idade = 19;
pessoa1.dataNascimento = function() {
    let dataAtual = new Date
    return dataAtual.getFullYear() - this.idade
}
console.log(pessoa1.dataNascimento(), ' +data de nascimento, método')
console.log('')


//percorrer as chaves
for (let i in pessoa1)
console.log(`${i}: ${pessoa1[i]}`)
console.log('')


//factory function
function criaPessoa(nome, sobrenome, idade, peso, altura) {
    function imc() {
        let imc = peso / (altura ** 2)
        return imc.toFixed(2);
    }
    function dataDeNascimento(){
        let data = new Date()
        return 'nasceu no ano: ', data.getFullYear() - idade
    }
    return{
        nome,
        sobrenome,
        idade,
        peso,
        altura,
        imc: imc(),
        anoNasceu: dataDeNascimento()
    }
}

const pessoa2 = criaPessoa('Gabriel', 'Augusto', 26, 70, 1.70);
console.log(pessoa2, ' +factory function');
console.log('');


//constructor function
function Pessoa(nome, sobrenome) {
    this.nome = nome //this é igual a variável que esta sendo atribuído
    this.sobrenome = sobrenome

    Object.freeze(this)
}

const pessoa3 = new Pessoa('Luiz', 'Miranda'); //nesse caso this é igual pessoa3
const p3 = new Pessoa('Miranda', 'Luiz'); //nesse caso this é igual p3
console.log(pessoa3, ' +cosntructor function')
console.log(p3, ' +cosntructor function')
console.log('');


