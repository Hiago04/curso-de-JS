//705.484.450-52
/* 
7x 0x 5x 4x 8x 4x 4x 5x 0x
10 9  8  7  6  5  4  3  2
70 0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (primeiro dígito)
Se o número for maior que 9 retorna 0

7x 0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10 9  8  7  6  5  4  3  2
77 0 45 32  56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Segundo dígito)
Se o número dígito for maior que 9, consideramos 0
  */


let numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
let cpfArray = Array.from(cpfLimpo);

numeros.reverse()
function verify1() {

    if(numeros[0] == 11) numeros.shift();

    let newCpf1 = [];

    for (let i of cpfArray) {
        newCpf1.push(Number(i))
    }


    newCpf1 = newCpf1.map((valor, i) => {
        return valor * numeros[i];
    })

    newCpf1 = newCpf1.reduce((ac, valor) => {
        if (valor) {
            ac += valor
        }
        return ac
    }, 0)

    newCpf1 = 11 - (newCpf1 % 11);
    if(newCpf1 >= 10){newCpf1 = 0};

    return newCpf1
};

function verify2() {
    
    if(numeros[0] === 10) numeros.unshift(11);
    let newCpf = [];

    for (let i of cpfArray) {
        newCpf.push(Number(i))
    }


    newCpf = newCpf.map((valor, i) => {
        return valor * numeros[i];
    })

    newCpf = newCpf.reduce((ac, valor) => {
        if (valor) {
            ac += valor
        }
        return ac
    }, 0)

    newCpf = 11 - (newCpf % 11);
    if(newCpf >= 10){newCpf = 0};

    return newCpf
};

let verificando1 = verify1();
let verificando2 = verify2();

if(verificando1 == cpf[cpf.length-2] && verificando2 == cpf[cpf.length-1]){
    console.log('CPF VÁLIDO');
}