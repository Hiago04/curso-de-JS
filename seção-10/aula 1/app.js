const mod1 = require('./mod1');
console.log(mod1); //tudo que exportamos do mod1
console.log();
console.log(mod1.digaNome());


console.log();
const falaNome = require('./mod1').digaNome
console.log(falaNome());


console.log();
const {NOME, sobrenome} = require('./mod1')
console.log(NOME, sobrenome);



