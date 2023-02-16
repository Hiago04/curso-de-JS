// try, catch, throw

function soma (n1, n2) {
   if (typeof n1 !== 'number' ||typeof n2 !== 'number') { 
   throw new ReferenceError ('n1 e n2 precisam ser números');
   }

   return n1 + n2;
}
console.log(soma(5, 5))
