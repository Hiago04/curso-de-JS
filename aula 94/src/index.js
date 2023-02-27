//Posso importar um por um

/* import { nome as nome2, sobrenome2, idade, Pessoa } from './modulo1'

const nome = 'Vagner'
const sobrenome = 'Miranda'

const pessoa1 = new Pessoa(nome2, sobrenome2);
const pessoa2 = new Pessoa(nome, sobrenome);

console.log(pessoa1);
console.log(pessoa2); */


//Posso importar todos de uma vez
/* (MeuModulo é um objeto)
import * as MeuModulo from './modulo1'

console.log(MeuModulo.idade); */

// importa func
// qualquerNome = soma, tem um default, valor padrão
/* import qualquerNome from './modulo1' //coloquei 'default' depois do export de soma()
console.log(qualquerNome(5, 5)); */


// importa default comconst/variáveis
/* import variavel from './modulo1'
console.log(variavel); */


//O jeito mais comum de se ver
import qualquerNome, {sobrenome2, idade} from './modulo1'//fora das chaves é o default
console.log(qualquerNome, sobrenome2, idade);