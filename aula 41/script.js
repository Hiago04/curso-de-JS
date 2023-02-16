// Várias maneiras de fazer uma func que recebe dois números e retorna o maior

//com if
/* function max(x, y) {
    if (x > y) {
        return x;
    } else {
        return y;
    }
} */

//if fatorado (reduzido)
/* function max(x, y) {
    if (x > y) return x; // ---> Não precisa de chaves pra só uma condição
    return y;
} */

//operação ternária
/* function max(x, y) {
    return x > y ? x : y;
} */

// arrow function
/* const max = (x, y) => {
    return x > y ? x : y;
} */

//arrow function reduzido
const max = (x, y) => x > y ? x : y; // para condições pequenas não é necessário nem return nem chaves

console.log(max(10, 8));

