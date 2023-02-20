const result = document.querySelector('#result-cpf');
const botao = document.querySelector('button');

class ValidaCPF {
    constructor(cpfEnviado) {
        Object.defineProperty(this, 'cpfLimpo', {
            writable: false,
            configurable: false,
            enumerable: true,
            value: cpfEnviado.replace(/\D+/g, '')
        })
    }

    eSequencia() {
        return this.cpfLimpo[0].repeat(11) == this.cpfLimpo
    }

    geraNovoCpf() {
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
        const digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1)

        this.novocpf = cpfSemDigitos + digito1 + digito2;

    }

    static geraDigito(cpfSemDigitos) {
        let total = 0;
        let reverso = cpfSemDigitos.length + 1

        for (let stringNumero of cpfSemDigitos) {
            total += reverso * Number(stringNumero);

            reverso--
        }

        const digito = 11 - (total % 11);
        return digito <= 9 ? String(digito) : '0';
    }

    valida() {
        if (!this.cpfLimpo) return false
        if (this.cpfLimpo.length !== 11) return false
        if (typeof this.cpfLimpo !== 'string') return false
        if (this.eSequencia()) return false
        this.geraNovoCpf();

        return this.cpfLimpo === this.novocpf
    }

}


document.addEventListener('click', function (e) {
    let el = e.target
    if (el === botao) {
        let num = () => String(Math.floor(Math.random() * (99999999999 - 0) + 0))
        let cpf = num().length === 10 ? `0${num()}` : num();
        let verifica = new ValidaCPF(cpf);

        while (!verifica.valida()) {
            cpf = num().length === 10 ? `0${num()}` : num();
            verifica = new ValidaCPF(cpf);
        }
        result.innerHTML = verifica.cpfLimpo;
    };
})

