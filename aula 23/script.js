/* valores false
false
0
''/ ""/ ``
NaN
null/undefined

O que nã for isso é true
*/

console.log('And' && 'amarelo' && 0 && 8); // --> O and verifica até achar um valor false e retorna

console.log(false || 'aqui o valor true' || '') // --> O OR verifica até o true e retorna

let corQueOUserEscolheu = null;
const corPadrao = 'preto';
let corFinal = corQueOUserEscolheu || corPadrao;
console.log(corFinal)

corQueOUserEscolheu = 'amarelo';
corFinal = corQueOUserEscolheu || corPadrao;
console.log(corFinal)
