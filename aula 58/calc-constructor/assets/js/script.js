function Calculadora() {
        this.display = document.querySelector('.display');
        this.btnClear = document.querySelector('.btn-clear');

        this.inicia = () => {
            this.cliqueBotoes();
            this.pressBotao();
        }

        this.realizaConta = () => {
            let conta = this.display.value;

            try {
                 conta = eval(conta); //pega o que foi digitado no input e transforma em uma operação javaScript
                
                if (!conta) {
                    alert('conta inválida')
                    return;
                };

                this.display.value = conta; //precisa ser transformado em string pra ser passado como parâmetro
            } catch (e) {
                alert('Conta inválida')
                return;
            }

        };

        this.clearDisplay = () => {
            this.display.value = '';
        };

        this.apagaUm = () => {
            this.display.value = this.display.value.slice(0, -1)
        };

        this.cliqueBotoes = () => {
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
        };

        this.pressBotao = () => {
            document.addEventListener('keypress', (e) => {
                if(e.key === 'Enter') this.realizaConta()
            })
        };
        
        this.btnDisplay = (valor) => {
            this.display.value += valor;
            this.display.focus()
        }
    }


const calculadora = new Calculadora();
calculadora.inicia()