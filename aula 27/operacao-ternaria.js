// operação ternária

const user1 = {
    name: 'Hiago',
    lastName: 'Silva',
    yearsOld: 17
}

let verify = (user1.yearsOld >= 18) ? 'Maior de idade' : 'Menor de idade';
console.log(verify)