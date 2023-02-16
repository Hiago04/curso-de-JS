/* Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol) */
let a = 'string';
let b = a; // O valor de a será copiado para b
a = 'number'; // Mesmo que eu mude o a, o valor de b permanece o mesmo
console.log(`Valor de a: ${a} -- Valor de b: ${b}`)

/* Referência (mutáveis) - array, object, function */

let c = [1, 2, 3];
let d = c; // O valor de d estará ligado a c
console.log(`Valor de c: ${c} -- Valor de d: ${d}`)

c.push('aldenir')
console.log(d) // se c é alterado d também, e vice e versa

d = [...c];
c.pop()
console.log(`Valor de c: ${c} -- Valor de d: ${d}`)// para não acontecer coloque d = [...variável] para array e {...variável} para objeto
