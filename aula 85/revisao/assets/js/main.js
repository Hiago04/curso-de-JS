class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.eventos()
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas)   {
            alert('Formulário enviado.')
        }

    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais')
        }

        if(senha.value.length < 6 || senha.value.length > 12) {
            this.criaErro(senha, 'Senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid
    }

    camposSaoValidos() {
        let valid = true

        for(let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            let label = campo.previousElementSibling
            console.log(label.innerText);
        
            if (!campo.value) {
                this.criaErro(campo, `${label.innerText} não pode ficar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }
            
            if(campo.classList.contains('usuario')) {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }
        return valid;
    }

    validaUsuario(campo) {
        const user = campo.value;
        let valida = true

        if(user.length < 3 || user.length > 12){
            this.criaErro(campo, "Usuário precisa ter de 3 a 12 caracteres");
            valida = false
        }

        if(!user.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo, "Usuário precisa ter apenas letras e/ou números");
            valida = false;
        }

        return valida;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.');
            return false;
        }

        return true;
    } //crio um validador de cpf

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    } // criei elemento, passei a mensagem pra ele e inseri depois da div
}

const valida = new ValidaFormulario();