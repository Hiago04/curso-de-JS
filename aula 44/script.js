// try, catch, throw
let number = typeof 5;

function soma (n1, n2) {
   if (typeof n1 !== number || typeof n2 !== number) { 
   throw new ReferenceError ('n1 e n2 precisam ser números'); 
   }

   return n1 + n2;
}

try {
   console.log(soma('a', 5)); // tenta executar o código entre chaves
} catch(err) { //se der errado ele captura aquele relatório de erro e coloca no nome dado entre parênteses
   console.log('Deu errado') // nova mensagem de erro
   console.log(err)//exibe a mensagem de erro antiga, exiba apenas no backend
}



/* try {
    console.log(naoExisto); // tenta executar o código entre chaves
 } catch(err) { //se der errado ele captura aquele relatório de erro e coloca no nome dado entre parênteses
    console.log('naoExisto não existe') // nova mensagem de erro
    console.log(err)//exibe a mensagem de erro antiga(opcional)
 } */

