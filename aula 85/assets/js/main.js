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

        for(let campo of this.formulario.querySelectorAll(('.validar'))){ //itera todas as classes 'validar' (no caso os inputs)
            console.log(campo);
            if(!campo.value) {
                this.criaErro(campo, `Não pode estar em branco`)
                valid = false
            }
        }
    }
    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario();
