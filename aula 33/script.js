const pessoa = {
    nome: 'Hiago',
    lastName: 'Silva',
    age: 18,
    address: {
        rua: 'Av. Brasil',
        num: 320
    }
}
console.log(pessoa.address.rua);


const {nome, lastName} = pessoa; // nome e lastName se tornam uma constante com o valor que tem no objeto
console.log(nome, lastName);

const {address: {rua}} = pessoa; //address: pega o valor dentro das chaves
console.log(rua);

const {address:{num: numero}} = pessoa; //atribuí o valor de num a constante numero
console.log(numero);

const {age = ''} = pessoa; // se dentro do objeto, age não tiver nenhum valor o valor será ''
console.log(age)