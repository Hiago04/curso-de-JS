const nome = 'Luiz'
const sobrenome = 'Miranda'
export const idade = 30 //posso exportar colocando no começo (mais comum)


export class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

export function soma(x, y) {
    return x + y
}
//export default (x, y) => x + y

export { nome as default, sobrenome as sobrenome2 }
//não da pra fazer "export default const", precisa ser no export {}