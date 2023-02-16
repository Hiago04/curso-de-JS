// while do while

let i = 0;

while(i <= 10){
   //console.log(i);
    i++;
} //melhor usar o for pra isso

function random (min, max) {
    const r = Math.random() * (max - min) + min;

    return Math.floor(r); //arredonda para o número inteiro mais baixo
}

const min = 1;
const max = 50;
let rand = random(min, max);
console.log(rand !== 10);

while (rand !== 10) { //enquanto isso for true executa os códigos abaixo
    rand = random(min, max); //atualiza a condição
    console.log(rand)
}

console.log('##### Do while #####')

do { //executa o código antes de verificar
    rand = random(min, max);
    console.log(rand)
} while(rand !== 10); // enquanto for true ele retorna