// 705.484.450-52 070.987.720-03
class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')//os dígitos não númericos serão apagados (7.7 vira 77)
        });
    }

    eSequencia() {
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo
    } //se o indice zero se repetir 11 vezes é uma sequencia

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2); //cpfSemDigitos recebe cpf limpo sem os dois últimos dígitos
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
        this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1 //digito1 = 10, digito 2 = 11

        for (let stringNumerica of cpfSemDigitos) {
            total += reverso * Number(stringNumerica); 
         /* digito1     digito2
            0 * 10      0 * 11
            7 * 9       7 * 10
            0 * 8       0 * 9
            9 * 7       9 * 8
            8 * 6       8 * 7
            7 * 5       7 * 6
            7 * 4       7 * 5
            2 * 3       2 * 4
            0 * 2       0 * 3
                        0 * 2
            */
            reverso--;
        }
        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0'
    }

    valida() {
        if (!this.cpfLimpo) return false; //cpfLimpo vazio retorna false
        if (typeof this.cpfLimpo !== 'string') return false; //cpfLimpo 
        if (this.cpfLimpo.length !== 11) return false; //cpfLimpo tiver menos que 11 caracteres, retorna false
        if (this.eSequencia()) return false; //se for uma sequencia retorna false
        this.geraNovoCpf();

        return this.novoCPF === this.cpfLimpo;
    }
}


const validacpf = new ValidaCPF('070.987.720-03')
console.log(validacpf);

if (validacpf.valida()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}


/* O que eu aprendia aqui */
//colocar return 'Cheguei aqui', pre verificar se uma função está funcionando
// utilizar if's pra casos que uma func possa dar errado, assim ela não desperdiça recursos executando a func