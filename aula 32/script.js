let [a, b, c] = [1, 2, 3]; // recebe de acordo com seu índice
//console.log(a, b, c);


/* const numeros = [0, 10, 20, 30, 40, 50];
const [A, B, C, ...resto] = numeros
console.log(A, B, C, resto);


const [A, ,C] = numeros;
console.log(A, C); */


const numeros = [[1, 2, 3], [4, 5, 6],  [7, 8, 9]];
/* const [,[,,seis]] = numeros;
const [,,[,oito]] = numeros;
console.log(seis, oito); */


const [lista1, lista2, lista3] = numeros; // separei os três arrays em cada lista
console.log(lista1[0], numeros[0] [1]); // diferentes formas de pegar o valor dentro do array