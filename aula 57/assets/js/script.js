function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia() {
            this.cliqueBotoes();
            this.pressBotao();
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                 conta = eval(conta); //pega o que foi digitado no input e transforma em uma operação javaScript
                
                if (!conta) {
                    alert('conta inválida')
                    return;
                };

                this.display.value = conta;
                 //precisa ser transformado em string pra ser passado como parâmetro
            } catch (e) {
                alert('Conta inválida')
                return;
            }

        },

        clearDisplay() {
            this.display.value = '';
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },

        cliqueBotoes() {
            document.addEventListener('click', (e) => {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }

            }); //o this usado na função abrange somente a func, com .bind() ele passa abranger o escopo de tudo que está dentro das chaves depois de return, igual no 'this.cliqueBotoes();', mas ele não é necessário se usar arrow function
        },

        pressBotao(){
            document.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') this.realizaConta()
            })
        },

        btnDisplay(valor) {
            this.display.value += valor;
            this.display.focus()
        }
    }
}
const calculadora = criaCalculadora();
calculadora.inicia()