function soma (n1, n2){ // criei uma função e atribui parâmetros (que são n1 e n2)
    let result = n1 + n2; // criei uma variável em que somei os dois parâmetro
    return result // vai retornar a variável de cima
}
console.log(soma(1, 2)) // substitui os parâmetros (n1 e n2) por argumentos (1 e 2)


      /* 3 Formas de criar uma function */

/* 1 */ function raiz1 (n){
    return n ** 0.5
}
console.log(raiz1(16))

/* 2 */ const raiz2 = function (n) {return n ** 0.5};
console.log(raiz2(16))

/* 3 */ const raiz3 = n => n**0.5;
console.log(raiz3(16))