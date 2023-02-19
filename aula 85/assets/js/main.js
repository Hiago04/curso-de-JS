const label = document.querySelectorAll('label')

class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos(); //assim que atribuído é executado
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e); //evento previnido
            this.camposSaoValidos()
        })
    }

    handleSubmit(value){
        value.preventDefault();// o valor passado previni o evento
        const camposValidos = this.camposSaoValidos();
    }

    camposSaoValidos() {
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){ 
//itera todas as classes 'validar' (no caso os inputs) //também poderia ser feito com for in, mas com for of é mais rápido
            const label = campo.previousElementSibling.innerText; 
//elemento irmão anterior, o label é irmão de input pois dentro do mesmo elemento pai
            if(!campo.value) {
                this.criaErro(campo, `Campo ${label} não pode estar em branco`)
                valid = false
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false
            }
        }
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
        //chamei a a func que validaCPF, que está em outro arquivo. os arquivos estão linkados através do script de HTML

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido.')
            return false;
        }
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div); //a div com a mensagem aparece depois do campo
    }
}

const valida = new ValidaFormulario();
